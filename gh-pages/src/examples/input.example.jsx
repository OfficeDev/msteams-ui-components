class InputExample extends React.Component {
  render() {
    return <ConnectedComponent render={(props) => {
      const { context } = props;
      const { rem, font } = context;
      const { sizes, weights } = font;

      const styles = {
        header: {...sizes.title, ...weights.semibold},
        section: {...sizes.title2, marginTop: rem(1.4), marginBottom: rem(1.4)},
        input: {
          paddingLeft: rem(0.5),
          paddingRight: rem(0.5),
          display: 'inline-block',
          width: '50%'},
      }

      return <Panel>
        <PanelHeader>
          <div style={styles.header}>Inputs</div>
        </PanelHeader>
        <PanelBody>
          <div style={styles.section}>No Label or Error</div>
          <Input style={styles.input} placeholder="Enabled" />
          <Input style={styles.input}  placeholder="Disabled" disabled/>
          <div style={styles.section}>With a label</div>
          <Input style={styles.input} placeholder="Enabled" label="With a label" />
          <Input style={styles.input} placeholder="Disabled" label="With a label" disabled />
          <div style={styles.section}>With an error</div>
          <Input style={styles.input} placeholder="Enabled" errorLabel="With an error " />
          <Input style={styles.input} placeholder="Disabled" errorLabel="With an error" disabled />
          <div style={styles.section}>With a label and error</div>
          <Input style={styles.input} placeholder="Enabled" label="With a label" errorLabel="With an error" />
          <Input style={styles.input} placeholder="Disabled" label="With a label" errorLabel="With an error" disabled />
        </PanelBody>
        <PanelFooter>
        </PanelFooter>
      </Panel>;
    }} />;
  }
}
