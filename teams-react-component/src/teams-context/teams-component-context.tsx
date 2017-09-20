import * as PropTypes from 'prop-types';
import * as React from 'react';
import { getTheme, Theme } from 'teams-styles-core';
import * as Colors from 'teams-styles-core';
import uniqueId from '../utils/uniqueId';
import { ThemeType } from './theme-type';

interface TeamsControlContext {
  subscribe: (notify: Notify) => Unsubscribe;
  theme: Theme;
}

const staticTypes = {
  theme: PropTypes.object,
  subscribe: PropTypes.func,
};

export interface TeamsComponentProps {
  theme: ThemeType;
  basePx: number;
}

interface Notify {
  (): void;
}

interface Unsubscribe {
  (): void;
}

export class TeamsComponentContext extends React.Component<TeamsComponentProps, {}> {
  static childContextTypes = staticTypes;

  private subscribers: { [id: string]: Notify };

  constructor(props: TeamsComponentProps) {
    super(props);
    this.subscribers = {};
    this.subscribe = this.subscribe.bind(this);
  }

  componentWillReceiveProps(nextProps: TeamsComponentProps) {
    if (nextProps.basePx !== this.props.basePx || nextProps.theme !== this.props.theme) {
      Object.keys(this.subscribers).forEach((key) => this.subscribers[key]());
    }
  }

  render() {
    return React.Children.only(this.props.children);
  }

  protected getChildContext(): any {
    let colors: Colors.Colors;
    switch (this.props.theme) {
      case ThemeType.Dark:
        colors = Colors.getDarkThemeColors();
        break;
      case ThemeType.HighContrast:
        colors = Colors.getHighContrastThemeColors();
        break;
      case ThemeType.Default:
      default:
        colors = Colors.getDefaultThemeColors();
    }

    const context: TeamsControlContext = {
      subscribe: this.subscribe.bind(this),
      theme: getTheme({
        basePx: this.props.basePx,
        colors,
      }),
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
  theme: Theme;
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
      const theme: {
        readonly theme: Theme
      } = {
          theme: this.context.theme,
        };
      const props: Readonly<TChildProps & { theme: Theme }> = {
        ...theme,
        ...(this.props as any),
      };
      return <ChildComp {...props} />;
    }
  }
  return ConnectedTeamsComponent;
}
