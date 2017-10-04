import { Colors, Context, getContext, ThemeStyle } from 'msteams-ui-styles-core';
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
  context: Context;
}

const staticTypes = {
  subscribe: PropTypes.func,
  style: PropTypes.number,
  context: PropTypes.object,
};

export class TeamsComponentContext extends React.Component<TeamsComponentProps> {
  static childContextTypes = staticTypes;
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  private subscribers: { [id: string]: Notify } = {};

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
      context: getContext({ baseFontSize: this.props.fontSize, colors: Colors, style: this.props.theme }),
    };
    return context;
  }

  private subscribe = (notify: Notify): Unsubscribe => {
    const id = uniqueId();
    this.subscribers[id] = notify;
    return () => delete this.subscribers[id];
  }
}

export interface InjectedTeamsProps {
  readonly context: Context;
}

export function connectTeamsComponent<TChildProps>(
  ChildComp: React.ComponentClass<TChildProps & InjectedTeamsProps>
    | React.StatelessComponent<TChildProps & InjectedTeamsProps>
): React.ComponentClass<TChildProps> {
  class ConnectedTeamsComponent extends React.Component<TChildProps> {
    static contextTypes = staticTypes;
    private unsubscribe: Unsubscribe;

    componentDidMount() {
      const subscribe = this.context && this.context.subscribe;
      if (subscribe) {
        this.unsubscribe = subscribe(() => this.forceUpdate());
      }
    }

    componentWillUnmount() {
      if (this.unsubscribe) {
        this.unsubscribe();
      }
    }

    render() {
      const props: Readonly<TChildProps> & Readonly<InjectedTeamsProps> = {
        ...this.props as any,
        context: this.context.context,
      };
      return <ChildComp {...props} />;
    }
  }
  return ConnectedTeamsComponent;
}

export {
  ThemeStyle
};
