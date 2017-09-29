class TabExample extends React.Component {
  constructor() {
    super();
    this.selectTabA = this.selectTabA.bind(this);
    this.selectTabB = this.selectTabB.bind(this);
    this.state = {selectedTab: 'a'};
  }

  selectTabA() {
    this.setState({selectedTab: 'a'});
  }

  selectTabB() {
    this.setState({selectedTab: 'b'});
  }

  render() {
    return (
      <Surface style={{padding: '10px'}}>
        <TabGroup selectedTabId={this.state.selectedTab}>
          <Tab tabId="a" onTabSelect={this.selectTabA}>Tab A</Tab>
          <Tab tabId="b" onTabSelect={this.selectTabB}>Tab B</Tab>
        </TabGroup>
      </Surface>
    );
  }
}
