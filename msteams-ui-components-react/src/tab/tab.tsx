import { tab, TabStyles } from 'msteams-ui-styles-core/lib/components/tab';
import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';
import uniqueId from '../utils/uniqueId';

export interface TabProps {
  tabs: TabItem[];
  selectedTabId: any;
}

export interface TabItem {
  text: string;
  onSelect: () => void;
  id: any;
}

class TabInternal extends React.Component<TabProps & InjectedTeamsProps> {
  render() {
    const { context, tabs } = this.props;
    const styles = tab(context);

    const renderTab = this.renderTabWithStyle(styles);

    return (
      <div
        data-component-type="Tab"
        className={styles.container}
      >
        {tabs.map(renderTab)}
      </div>
    );
  }

  private renderTabWithStyle = (styles: TabStyles) => {
    const renderTab = (item: TabItem) => {
      const classes = [styles.normal];

      if (this.props.selectedTabId === item.id) {
        classes.push(styles.active);
      }

      return (
        <button
          key={item.id}
          data-component-type="Tab"
          onClick={item.onSelect}
          className={classes.join(' ')}
        >
          {item.text}
        </button>
      );
    };

    return renderTab;
  }
}

export const Tab = connectTeamsComponent(TabInternal);
