import { Colors, getTheme, Theme, ThemeStyle } from 'msteams-ui-styles-core';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import uniqueId from '../utils/uniqueId';

export interface TeamsComponentProps {
  theme: ThemeStyle;
  fontSize: number;
  children: React.ReactChild;
}

interface Notify {
  (): void;
}

interface Unsubscribe {
  (): void;
}

interface TeamsControlContext {
  subscribe: (notify: Notify) => Unsubscribe;
  theme: Theme;
}

const staticTypes = {
  theme: PropTypes.object,
  subscribe: PropTypes.func,
  style: PropTypes.number,
};

export class TeamsComponentContext extends React.Component<TeamsComponentProps> {
  static childContextTypes = staticTypes;
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  private subscribers: { [id: string]: Notify };

  constructor(props: TeamsComponentProps) {
    super(props);
    this.subscribers = {};
    this.subscribe = this.subscribe.bind(this);
  }

  componentWillReceiveProps(nextProps: TeamsComponentProps) {
    if (nextProps.fontSize !== this.props.fontSize || nextProps.theme !== this.props.theme) {
      Object.keys(this.subscribers).forEach((key) => this.subscribers[key]());
    }
  }

  render() {
    return React.Children.only(this.props.children);
  }

  protected getChildContext(): any {
    const context: TeamsControlContext = {
      subscribe: this.subscribe,
      theme: getTheme({ baseFontSize: this.props.fontSize, colors: Colors, style: this.props.theme }),
    };
    return context;
  }

  private subscribe(notify: Notify): Unsubscribe {
    const id = uniqueId();
    this.subscribers[id] = notify;
    return () => delete this.subscribers[id];
  }
}

export interface InjectedTeamsProps {
  readonly theme: Theme;
}

export function connectTeamsComponent<TChildProps>(
  ChildComp: React.ComponentClass<TChildProps & InjectedTeamsProps>
    | React.StatelessComponent<TChildProps & InjectedTeamsProps>
): React.ComponentClass<TChildProps> {
  class ConnectedTeamsComponent extends React.Component<TChildProps> {
    static contextTypes = staticTypes;
    private unsubscribe: Unsubscribe;

    componentDidMount() {
      this.unsubscribe = this.context.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
      this.unsubscribe();
    }

    render() {
      const props: Readonly<TChildProps> & Readonly<InjectedTeamsProps> = {
        ...this.props as any,
        theme: this.context.theme,
      };
      return <ChildComp {...props} />;
    }
  }
  return ConnectedTeamsComponent;
}

export {
  ThemeStyle
};
