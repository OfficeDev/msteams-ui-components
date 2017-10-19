import { tab as tabClasses } from 'msteams-ui-styles-core/lib/components/tab';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';
import { TabContext, TabContextType } from './index';
import { TabProps, TabPropTypes } from './tab';

export interface TabGroupProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: Array<React.ReactElement<TabProps>>;
  selectedTabId: any;
}

class TabGroupInternal extends React.Component<InjectedTeamsProps & TabGroupProps, {}> {
  static childContextTypes = TabContextType;

  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.shape({
      props: PropTypes.shape(TabPropTypes).isRequired,
    })).isRequired,
  };

  render() {
    const { context, selectedTabId, ...rest } = this.props;
    const themeClassNames = tabClasses(context);
    return (
      <div className={themeClassNames.container} {...rest}>
        {this.props.children}
      </div>
    );
  }

  // tslint:disable-next-line:no--variable
  private getChildContext(): TabContext {
    return {
      isSelected: this.isSelected,
    };
  }

  private isSelected = (tabId: any) => {
    return tabId === this.props.selectedTabId;
  }
}

export const TabGroup = connectTeamsComponent<TabGroupProps>(TabGroupInternal);
