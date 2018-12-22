class TabExample extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 'a',
    };
  }

  selectTabA() {
    this.setState({ selectedTab: 'a' });
  }

  selectTabB() {
    this.setState({ selectedTab: 'b' });
  }

  render() {
    return <TeamsThemeContext.Consumer>
      {(context) => {
        const { rem, font } = context;
        const { sizes, weights } = font;

        const styles = {
          header: { ...sizes.title, ...weights.semibold },
          section: { ...sizes.title2, marginTop: rem(1.4), marginBottom: rem(1.4) }
        }

        return <Panel>
          <PanelHeader>
            <div style={styles.header}>Tabs</div>
          </PanelHeader>
          <PanelBody>
            <div style={styles.section}></div>
            <Tab
              autoFocus
              selectedTabId={this.state.selectedTab}
              tabs={[
                {
                  text: 'Tab A',
                  onSelect: () => this.selectTabA(),
                  id: 'a',
                },
                {
                  text: 'Tab B',
                  onSelect: () => this.selectTabB(),
                  id: 'b',
                }
              ]}
            />
          </PanelBody>
          <PanelFooter>
          </PanelFooter>
        </Panel>;
      }}
    </TeamsThemeContext.Consumer>
  }
}
