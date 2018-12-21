class ToggleExample extends React.Component {
  constructor() {
    super();
    this.onToggle = this.onToggle.bind(this);
    this.state = { toggle: false };
  }

  onToggle() {
    this.setState({toggle: !this.state.toggle});
  }

  render() {
    return <TeamsThemeContext.Consumer>
      {(context) => {
        const { rem, font } = context;
        const { sizes, weights } = font;

        const styles = {
          header: {...sizes.title, ...weights.semibold},
          section: {...sizes.title2, marginTop: rem(1.4), marginBottom: rem(1.4)}
        }

        return <Panel>
          <PanelHeader>
            <div style={styles.header}>Toggles</div>
          </PanelHeader>
          <PanelBody>
            <div style={styles.section}></div>
            <Toggle autoFocus checked={this.state.toggle} onToggle={this.onToggle} />
            <Toggle autoFocus disabled checked={this.state.toggle} onToggle={this.onToggle} />
          </PanelBody>
          <PanelFooter>
          </PanelFooter>
        </Panel>;
      }}
    </TeamsThemeContext.Consumer>
  }
}
