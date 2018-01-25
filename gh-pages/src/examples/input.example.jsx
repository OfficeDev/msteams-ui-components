class InputExample extends React.Component {
  constructor() {
    super();
    this.onValueChanged = this.onValueChanged.bind(this);
    this.state = {value: ""};
  }

  render() {
    return <ConnectedComponent render={(props) => {
      const { context } = props;
      const { rem, font } = context;
      const { sizes, weights } = font;

      const styles = {
        header: {...sizes.title, ...weights.semibold},
        input: {
          paddingTop: rem(0.5),
          width: '50%'},
      }

      return <Panel>
        <PanelHeader>
          <div style={styles.header}>Inputs</div>
        </PanelHeader>
        <PanelBody>
          <Input
            autoFocus
            style={styles.input}
            placeholder="Enabled"
            label="Enabled text box"
            errorLabel={!this.state.value ? "This value is required" : null}
            value={this.state.value}
            onChange={this.onValueChanged}
            required />
          <Input
            style={styles.input}
            placeholder="Disabled"
            label="Disabled text box"
            disabled />
        </PanelBody>
        <PanelFooter>
        </PanelFooter>
      </Panel>;
    }} />;
  }

  onValueChanged(event) {
    this.setState(Object.assign({}, this.state, {value: event.target.value}));
  }
}
