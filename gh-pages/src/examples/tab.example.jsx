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
    return <ConnectedComponent render={(props) => {
      const { context } = props;
      const { rem, font } = context;
      const { sizes, weights } = font;

      const styles = {
        header: {...sizes.title, ...weights.semibold},
        section: {...sizes.title2, marginTop: rem(1.4), marginBottom: rem(1.4)}
      }

      return <Panel>
        <PanelHeader>
          <div style={styles.header}>Tabs</div>
        </PanelHeader>
        <PanelBody>
          <div style={styles.section}></div>
          <TabGroup selectedTabId={this.state.selectedTab}>
            <Tab tabId="a" onTabSelect={this.selectTabA}>Tab A</Tab>
            <Tab tabId="b" onTabSelect={this.selectTabB}>Tab B</Tab>
          </TabGroup>
        </PanelBody>
        <PanelFooter>
        </PanelFooter>
      </Panel>;
    }} />;
  }
}
