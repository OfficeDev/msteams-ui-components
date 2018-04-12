class RadiobuttonExample extends React.Component {
  constructor() {
    super();
    this.onOneSelected = this.onOneSelected.bind(this);
    this.onTwoSelected = this.onTwoSelected.bind(this);
    this.onGroupSelected = this.onGroupSelected.bind(this);
    this.state = {one: false, two: false, groupValue: 1};
  }

  onOneSelected(selected, value) {
    this.setState(Object.assign({}, this.state, {one: selected}));
  }

  onTwoSelected(selected, value) {
    this.setState(Object.assign({}, this.state, {two: selected}));
  }

  onGroupSelected(value) {
    this.setState(Object.assign({}, this.state, {groupValue: value}));
  }

  render() {
    return <ConnectedComponent render={(props) => {
      const { context } = props;
      const { rem, font } = context;
      const { sizes, weights } = font;

      const styles = {
        header: {...sizes.title, ...weights.semibold},
        section: {...sizes.title2, marginTop: rem(1.4), marginBottom: rem(1.4)},
        radiobuttonGroup: {width: rem(20)},
      }

      return <Panel>
        <PanelHeader>
          <div style={styles.header}>RadioButtons</div>
        </PanelHeader>
        <PanelBody>
          <div>
            <div style={styles.section}>Enabled</div>
            <Radiobutton autoFocus value={1}
              label="Enabled"
              name="enabled"
              selected={this.state.one}
              onSelected={this.onOneSelected} />
          </div>
          <div>
            <div style={styles.section}>Disabled</div>
            <Radiobutton value={2}
              label="Disabled"
              name="disabled"
              selected={this.state.two}
              onSelected={this.onTwoSelected}
              disabled />
          </div>
          <div style={styles.section}>Grouped</div>
          <RadiobuttonGroup
            style={styles.radiobuttonGroup}
            label="Group label"
            errorLabel={this.state.groupValue != 2 ? "Must choose 'Option 2'" : null}
            value={this.state.groupValue}
            onSelected={this.onGroupSelected} >
            <Radiobutton name="grouped" value={1} label="Option 1" />
            <Radiobutton name="grouped" value={2} label="Option 2" />
          </RadiobuttonGroup>
        </PanelBody>
        <PanelFooter>
        </PanelFooter>
      </Panel>;
    }} />;
  }
}
