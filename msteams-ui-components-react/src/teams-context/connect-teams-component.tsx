import { Context } from 'msteams-ui-styles-core';
import * as React from 'react';
import { ComponentContext, ContextProps, Unsubscribe } from './shared';

export interface InjectedTeamsProps {
  readonly context: Context;
}

interface ConnectedComponentState {
  context: Context;
}

export function connectTeamsComponent<TChildProps>(
  ChildComp: React.ComponentClass<TChildProps & InjectedTeamsProps>
    | React.StatelessComponent<TChildProps & InjectedTeamsProps>
): React.ComponentClass<TChildProps> {
  class ConnectedTeamsComponent extends React.Component<TChildProps, ConnectedComponentState> {
    static contextTypes = ContextProps;
    context: ComponentContext;
    private unsubscribe: Unsubscribe;

    componentWillMount() {
      this.unsubscribe = this.context.subscribe(this.contextUpdate);
    }

    componentWillUnmount() {
      if (this.unsubscribe) {
        this.unsubscribe();
      }
    }

    render() {
      const props: Readonly<TChildProps> & Readonly<InjectedTeamsProps> = {
        ...this.props as any,
        context: this.state.context,
      };
      return <ChildComp {...props} />;
    }

    contextUpdate = (context: Context) => {
      this.setState({context});
    }
  }
  return ConnectedTeamsComponent;
}
