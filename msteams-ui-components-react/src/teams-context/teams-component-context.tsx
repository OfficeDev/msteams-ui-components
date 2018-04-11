import { Colors, getContext, IContext, ThemeStyle } from 'msteams-ui-styles-core';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import uniqueId from '../utils/uniqueId';
import { ContextProps, IComponentContext, IThemeObserver, IUnsubscribe } from './shared';

export interface ITeamsComponentProps {
  theme: ThemeStyle;
  fontSize: number;
}

export interface ITeamsComponentState {
  context: IContext;
}

export class TeamsComponentContext extends React.Component<ITeamsComponentProps, ITeamsComponentState> {
  static childContextTypes = ContextProps;
  static propTypes = {
    theme: PropTypes.number.isRequired,
    fontSize: PropTypes.number.isRequired,
    children: PropTypes.element.isRequired,
  };
  private themeContext: IContext;
  private subscribers = new Map<string, IThemeObserver>();

  constructor(props: ITeamsComponentProps) {
    super(props);
    this.themeContext = getContext({
      baseFontSize: this.props.fontSize,
      colors: Colors,
      style: this.props.theme,
    });
  }

  componentWillReceiveProps(nextProps: ITeamsComponentProps) {
    if (nextProps.fontSize !== this.props.fontSize || nextProps.theme !== this.props.theme) {
      this.themeContext = getContext({
        baseFontSize: nextProps.fontSize,
        colors: Colors,
        style: nextProps.theme,
      });
      this.subscribers.forEach((observer) => {
        observer(this.themeContext);
      });
    }
  }

  render() {
    return React.Children.only(this.props.children);
  }

  protected getChildContext(): IComponentContext {
    return {
      subscribe: this.subscribe,
    };
  }

  private subscribe = (observer: IThemeObserver): IUnsubscribe => {
    const id = uniqueId();
    this.subscribers.set(id, observer);
    observer(this.themeContext);
    return () => this.subscribers.delete(id);
  }
}
