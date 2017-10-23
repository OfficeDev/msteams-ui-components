class ButtonExample extends React.Component {
  render() {
    return (
      <div>
        <h4>Primary</h4>
        <PrimaryButton onClick={this.onClick}>Enabled</PrimaryButton>
        <PrimaryButton onClick={this.onClick} disabled>Disabled</PrimaryButton>
        <h4>Secondary</h4>
        <SecondaryButton onClick={this.onClick}>Enabled</SecondaryButton>
        <SecondaryButton onClick={this.onClick} disabled>Disabled</SecondaryButton>
        <h4>Compound</h4>
        <CompoundButton onClick={this.onClick} primaryText="No Icon" secondaryText="Secondary Text" />
        <CompoundButton onClick={this.onClick} icon={this.renderIcon} primaryText="Enabled" secondaryText="Secondary Text" />
        <CompoundButton onClick={this.onClick} icon={this.renderIcon} primaryText="Disabled" secondaryText="Secondary Text" disabled/>
      </div>
    );
  }

  onClick(event) {
    window.alert("You clicked a button!");
  }

  renderIcon() {
    return (
      <div style={{margin: 'auto'}}>
        <MSTeamsIcon iconType={MSTeamsIconType.monkey}/>
      </div>
    );
  }
}
