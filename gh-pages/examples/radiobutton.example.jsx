class RadiobuttonExample extends React.Component {
  constructor() {
    super();
    this.onOneSelected = this.onOneSelected.bind(this);
    this.onTwoSelected = this.onTwoSelected.bind(this);
    this.onGroupSelected = this.onGroupSelected.bind(this);
    this.state = {one: true, two: false, groupValue: 1};
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
    return <Surface style={{padding: '10px'}}>
      <h4>Alone</h4>
      <Radiobutton value={1} label="Option 1"
        selected={this.state.one}
        onSelected={this.onOneSelected} />
      <Radiobutton value={2} label="Option 2"
        selected={this.state.two}
        onSelected={this.onTwoSelected} />
      <h4>In Group</h4>
      <RadiobuttonGroup
        value={this.state.groupValue}
        onSelected={this.onGroupSelected} >
        <Radiobutton value={1} label="Option 1" />
        <Radiobutton value={2} label="Option 2" />
      </RadiobuttonGroup>
    </Surface>;
  }
}
