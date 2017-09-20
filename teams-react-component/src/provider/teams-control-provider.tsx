import * as React from 'react';
import { getContext } from 'teams-styles-core/dist/index';
import { primary } from 'teams-styles-core/dist/typestyle-binding/buttons/primary';

export interface Theme {
  primaryButton: string;
}

export interface TeamsControlContext {
  subscribe: (notify: Notify) => Unsubscribe;
  theme: Theme;
}

const staticTypes = {
  theme: React.PropTypes.object,
  subscribe: React.PropTypes.func,
};

export interface Notify {
  (): void;
}

export interface Unsubscribe {
  (): void;
}

export class TeamsControlProvider extends React.Component<{}, {}>
  implements React.ChildContextProvider<TeamsControlContext> {
  static childContextTypes = staticTypes;

  private styleContext = getContext();
  private childContext: TeamsControlContext;
  private subscribers: {
    [id: number]: Notify;
  };
  private nextSubscribeId: number = 0;

  constructor() {
    super();
    this.childContext = {
      subscribe: this.subscribe.bind(this),
      theme: {
        primaryButton: primary(this.styleContext),
      },
    };
  }

  getChildContext() {
    return this.childContext;
  }

  subscribe(notify: Notify): Unsubscribe {
    const id = this.nextSubscribeId++;
    this.subscribers[id] = notify;
    return () => delete this.subscribers[id];
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export function connectTeamsControlProvider(
  ChildComp: any): any {
  class ConnectedTeamsControlComponent extends React.Component {
    static contextTypes = staticTypes;
    private unsubscribe: any;

    componentDidMount() {
      this.unsubscribe = this.context.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
      this.unsubscribe();
    }

    render() {
      return <ChildComp theme={this.context.theme} {...this.props} />;
    }
  }
  return ConnectedTeamsControlComponent;
}
