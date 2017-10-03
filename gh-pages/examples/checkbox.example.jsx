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
    return <Surface style={{padding: '10px'}}>
      <Checkbox value={1} label="Enabled"
        checked={this.state.one}
        onChecked={this.onOneChecked} />
      <Checkbox value={2} label="Disabled"
        checked={this.state.two}
        onChecked={this.onTwoChecked} disabled/>

      <h4>In Group</h4>
      <CheckboxGroup
        values={this.state.groupValues}
        onChecked={this.onGroupChecked} >
        <Checkbox value={1} label="Option 1" />
        <Checkbox value={2} label="Option 2" />
      </CheckboxGroup>
    </Surface>;
  }
}
