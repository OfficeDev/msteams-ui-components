class ButtonExample extends React.Component {
  render() {
    this.primaryButton = null;
    this.secondaryButton = null;

    return <ConnectedComponent render={(props) => {
      const { context } = props;
      const { rem, font } = context;
      const { sizes, weights } = font;

      const styles = {
        header: { ...sizes.title, ...weights.semibold },
        section: { ...sizes.title2, marginTop: rem(1.4), marginBottom: rem(1.4) }
      }

      return <Panel>
        <PanelHeader>
          <div style={styles.header}>Buttons</div>
        </PanelHeader>
        <PanelBody>
          <div style={styles.section}>Primary</div>
          <PrimaryButton onRef={(ref) => this.primaryButton = ref}>Enabled</PrimaryButton>
          <PrimaryButton onClick={() => this.focusPrimaryButton()}>Focus previous button</PrimaryButton>
          <PrimaryButton disabled>Disabled</PrimaryButton>
          <div style={styles.section}>Secondary</div>
          <SecondaryButton onRef={(ref) => this.secondaryButton = ref}>Enabled</SecondaryButton>
          <SecondaryButton onClick={() => this.focusSecondaryButton()}>Focus previous button</SecondaryButton>
          <SecondaryButton disabled>Disabled</SecondaryButton>
        </PanelBody>
        <PanelFooter>
        </PanelFooter>
      </Panel>;
    }} />;
  }

  renderIcon() {
    return (
      <div style={{ margin: 'auto' }}>
        <MSTeamsIcon iconType={MSTeamsIconType.monkey} />
      </div>
    );
  }

  focusPrimaryButton() {
    this.primaryButton.focus();
  }

  focusSecondaryButton() {
    this.secondaryButton.focus();
  }
}
