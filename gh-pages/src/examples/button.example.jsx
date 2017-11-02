class ButtonExample extends React.Component {
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
          <div style={styles.header}>Buttons</div>
        </PanelHeader>
        <PanelBody>
          <div style={styles.section}>Primary</div>
          <PrimaryButton>Enabled</PrimaryButton>
          <PrimaryButton disabled>Disabled</PrimaryButton>
          <div style={styles.section}>Secondary</div>
          <SecondaryButton>Enabled</SecondaryButton>
          <SecondaryButton disabled>Disabled</SecondaryButton>
          <div style={styles.section}>Compound</div>
          <CompoundButton primaryText="No Icon" secondaryText="Secondary Text" />
          <CompoundButton icon={this.renderIcon} primaryText="Enabled" secondaryText="Secondary Text" />
          <CompoundButton icon={this.renderIcon} primaryText="Disabled" secondaryText="Secondary Text" disabled/>
        </PanelBody>
        <PanelFooter>
        </PanelFooter>
      </Panel>;
    }} />;
  }

  renderIcon() {
    return (
      <div style={{margin: 'auto'}}>
        <MSTeamsIcon iconType={MSTeamsIconType.monkey}/>
      </div>
    );
  }
}
