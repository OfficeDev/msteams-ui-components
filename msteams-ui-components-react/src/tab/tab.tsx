import { tab, TabStyles } from 'msteams-ui-styles-core/lib/components/tab';
import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';

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
        <div
          className={styles.itemContainer}
          key={item.id}
        >
          <button
            data-component-type="Tab"
            onClick={item.onSelect}
            className={classes.join(' ')}
          >
            {item.text}
          </button>
        </div>
      );
    };

    return renderTab;
  }
}

export const Tab = connectTeamsComponent(TabInternal);
