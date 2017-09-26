import { Tab, TabGroup } from 'msteams-ui-components-react';
import * as React from 'react';

interface TabSectionState {
  selectedTab: string;
}

export class TabSection extends React.Component<{}, TabSectionState> {
  constructor() {
    super();
    this.selectTabA = this.selectTabA.bind(this);
    this.selectTabB = this.selectTabB.bind(this);
    this.state = {
      selectedTab: 'a',
    };
  }

  selectTabA() {
    this.setState({
      selectedTab: 'a',
    });
  }

  selectTabB() {
    this.setState({
      selectedTab: 'b',
    });
  }

  render() {
    return (
      <div>
        <h1>Tab</h1>
        <TabGroup selectedTabId={this.state.selectedTab}>
          <Tab tabId="a" onTabSelect={this.selectTabA}>a tab</Tab>
          <Tab tabId="b" onTabSelect={this.selectTabB}>another tab</Tab>
        </TabGroup>
      </div>
    );
  }
}
