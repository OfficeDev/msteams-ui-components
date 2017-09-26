class ToggleExample extends React.Component {
  constructor() {
    super();
    this.onToggle = this.onToggle.bind(this);
    this.state = {toggle: false};
  }

  onToggle() {
    this.setState(Object.assign({}, this.state, {toggle: !this.state.toggle}));
  }

  render() {
    return <Panel style={{padding: '10px'}}>
      <Toggle value={this.state.toggle} onChange={this.onToggle} />
    </Panel>;
  }
}
