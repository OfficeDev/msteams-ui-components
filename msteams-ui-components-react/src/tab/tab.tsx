import * as PropTypes from 'prop-types';
import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';
import { TabContext, TabContextType } from './index';

export interface TabProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  tabId: string;
  onTabSelect: () => void;
}

export const TabPropTypes = {
  tabId: PropTypes.string.isRequired,
};

class TabInternal extends React.Component<InjectedTeamsProps & TabProps, {}> {
  static contextTypes = TabContextType;

  static propTypes = TabPropTypes;

  context: TabContext;

  render() {
    const { theme, tabId, onTabSelect, ...rest } = this.props;

    const classes = [theme.tab.normal];
    if (this.context.isSelected(tabId)) {
      classes.push(theme.tab.active);
    }

    return (
      <button
        onClick={onTabSelect}
        className={classes.join(' ')}
        {...rest}
      >
        {this.props.children}
      </button>
    );
  }
}

export const Tab = connectTeamsComponent<TabProps>(TabInternal);
