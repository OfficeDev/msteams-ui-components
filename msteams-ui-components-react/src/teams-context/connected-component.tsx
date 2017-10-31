import { Context } from 'msteams-ui-styles-core';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { ComponentContext, ContextProps, Unsubscribe } from './shared';

export interface InjectedTeamsProps {
  readonly context: Context;
}

export interface ConnectedComponentProps {
  component?: React.ComponentType<InjectedTeamsProps | {}>;
  render?: ((props: InjectedTeamsProps) => React.ReactNode);
  children?: ((props: InjectedTeamsProps) => React.ReactNode) | React.ReactNode;
}

export interface ConnectedComponentState {
  context: Context;
}

export class ConnectedComponent<T extends ConnectedComponentProps = ConnectedComponentProps>
  extends React.Component<any, ConnectedComponentState> {
  static propTypes = {
    component: PropTypes.func,
    render: PropTypes.func,
    children: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.node
    ]),
  };
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

  private contextUpdate = (context: Context) => {
    this.setState({context});
  }
}
