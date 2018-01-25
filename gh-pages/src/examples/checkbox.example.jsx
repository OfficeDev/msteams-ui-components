class CheckboxExample extends React.Component {
  constructor() {
    super();
    this.onOneChecked = this.onOneChecked.bind(this);
    this.onTwoChecked = this.onTwoChecked.bind(this);
    this.onGroupChecked = this.onGroupChecked.bind(this);
    this.state = {one: true, two: false, groupValues: []};
  }

  onOneChecked(checked, value) {
    this.setState(Object.assign({}, this.state, {one: checked}));
  }

  onTwoChecked(checked, value) {
    this.setState(Object.assign({}, this.state, {two: checked}));
  }

  onGroupChecked(values) {
    this.setState(Object.assign({}, this.state, {groupValues: values}));
  }

  render() {
    return <ConnectedComponent render={(props) => {
      const { context } = props;
      const { rem, font } = context;
      const { sizes, weights } = font;

      const styles = {
        header: {...sizes.title, ...weights.semibold},
        section: {...sizes.title2, marginTop: rem(1.4), marginBottom: rem(1.4)},
        checkboxGroup: {width: rem(20)},
      }

      return <Panel>
        <PanelHeader>
          <div style={styles.header}>Checkboxes</div>
        </PanelHeader>
        <PanelBody>
          <div style={styles.section}>Enabled</div>
          <Checkbox autoFocus value={1} label="Enabled"
            checked={this.state.one}
            onChecked={this.onOneChecked} />
          <div style={styles.section}>Disabled</div>
          <Checkbox value={2} label="Disabled"
            checked={this.state.two}
            onChecked={this.onTwoChecked} disabled/>

          <div style={styles.section}>Grouped</div>
          <CheckboxGroup
            style={styles.checkboxGroup}
            label="Group label"
            errorLabel={this.state.groupValues.length == 0 ? "Must choose one" : null}
            values={this.state.groupValues}
            onChecked={this.onGroupChecked} >
            <Checkbox value={1} label="Option 1" />
            <Checkbox value={2} label="Option 2" />
          </CheckboxGroup>
        </PanelBody>
        <PanelFooter>
        </PanelFooter>
      </Panel>;
    }} />;
  }
}
