import { Colors, Context, getContext, ThemeStyle } from 'msteams-ui-styles-core';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import uniqueId from '../utils/uniqueId';
import { ComponentContext, ContextProps, ThemeObserver, Unsubscribe } from './shared';

export interface TeamsComponentProps {
  theme: ThemeStyle;
  fontSize: number;
}

export interface TeamsComponentState {
  context: Context;
}

export class TeamsComponentContext extends React.Component<TeamsComponentProps, TeamsComponentState> {
  static childContextTypes = ContextProps;
  static propTypes = {
    theme: PropTypes.number.isRequired,
    fontSize: PropTypes.number.isRequired,
    children: PropTypes.element.isRequired,
  };
  private themeContext: Context;
  private subscribers = new Map<string, ThemeObserver>();

  constructor(props: TeamsComponentProps) {
    super(props);
    this.themeContext = getContext({
      baseFontSize: this.props.fontSize,
      colors: Colors,
      style: this.props.theme,
    });
  }

  componentWillReceiveProps(nextProps: TeamsComponentProps) {
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

  protected getChildContext(): ComponentContext {
    return {
      subscribe: this.subscribe,
    };
  }

  private subscribe = (observer: ThemeObserver): Unsubscribe => {
    const id = uniqueId();
    this.subscribers.set(id, observer);
    observer(this.themeContext);
    return () => this.subscribers.delete(id);
  }
}
