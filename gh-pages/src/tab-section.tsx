import { Tab, TabGroup } from 'msteams-ui-components-react';
import * as React from 'react';

interface TabSectionState {
  selectedTab: string;
}

export class TabSection extends React.Component<{}, TabSectionState> {
  constructor() {
    super();
    this.selectTab = this.selectTab.bind(this);
    this.state = {
      selectedTab: 'a',
    };
  }

  selectTab(tabId: string) {
    this.setState({
      selectedTab: tabId,
    });
  }

  render() {
    return (
      <div>
        <h1>Tab</h1>
        <TabGroup selectedTabId={this.state.selectedTab} onTabSelect={this.selectTab}>
          <Tab tabId="a">a tab</Tab>
          <Tab tabId="b">another tab</Tab>
        </TabGroup>
      </div>
    );
  }
}
