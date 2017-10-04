import { tab } from 'msteams-ui-styles-core/lib/components/tab';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';
import { TabContext, TabContextType } from './index';

export interface TabProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  tabId: any;
  onTabSelect: () => void;
}

export const TabPropTypes = {
  tabId: PropTypes.any.isRequired,
};

class TabInternal extends React.Component<InjectedTeamsProps & TabProps, {}> {
  static contextTypes = TabContextType;
  static propTypes = TabPropTypes;
  context: TabContext;

  render() {
    const { context, tabId, onTabSelect, ...rest } = this.props;
    const themeClassNames = tab(context);
    const classes = [themeClassNames.normal];
    if (this.context.isSelected(tabId)) {
      classes.push(themeClassNames.active);
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
