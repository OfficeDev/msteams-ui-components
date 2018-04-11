import { IContext } from 'msteams-ui-styles-core';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { ContextProps, IComponentContext, IUnsubscribe } from './shared';

export interface IInjectedTeamsProps {
  readonly context: IContext;
}

export interface IConnectedComponentProps {
  component?: React.ComponentType<IInjectedTeamsProps | {}>;
  render?: ((props: IInjectedTeamsProps) => React.ReactNode);
  children?: ((props: IInjectedTeamsProps) => React.ReactNode) | React.ReactNode;
}

export interface IConnectedComponentState {
  context: IContext;
}

export class ConnectedComponent
  extends React.Component<any, IConnectedComponentState> {
  static propTypes = {
    component: PropTypes.func,
    render: PropTypes.func,
    children: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.node
    ]),
  };
  static contextTypes = ContextProps;

  context: IComponentContext;
  private unsubscribe: IUnsubscribe | null = null;

  componentWillMount() {
    this.unsubscribe = this.context.subscribe(this.contextUpdate);
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  render() {
    const { children, component, render } = this.props;
    const { context } = this.state;
    const props = { context };

    if (component) {
      return React.createElement(component, props);
    }

    if (render) {
      return render(props);
    }

    if (typeof children === 'function') {
      return children(props);
    }

    if (children && React.Children.count(children) > 0) {
      return React.Children.only(children);
    }

    return null;
  }

  private contextUpdate = (context: IContext) => {
    this.setState({context});
  }
}
