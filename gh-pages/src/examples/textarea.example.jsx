class TextAreaExample extends React.Component {
  render() {
    return <ConnectedComponent render={(props) => {
      const { context } = props;
      const { rem, font } = context;
      const { sizes, weights } = font;

      const styles = {
        header: {...sizes.title, ...weights.semibold},
        section: {...sizes.title2, marginTop: rem(1.4), marginBottom: rem(1.4)},
        textArea: {
          paddingLeft: rem(0.5),
          paddingRight: rem(0.5),
          display: 'inline-block',
          width: '50%'},
      }

      return <Panel>
        <PanelHeader>
          <div style={styles.header}>TextAreas</div>
        </PanelHeader>
        <PanelBody>
          <div style={styles.section}>No Label or Error</div>
          <TextArea style={styles.textArea} placeholder="Enabled" />
          <TextArea style={styles.textArea} placeholder="Disabled" disabled/>
          <div style={styles.section}>With a label</div>
          <TextArea style={styles.textArea} placeholder="Enabled" label="With a label" />
          <TextArea style={styles.textArea} placeholder="Disabled" label="With a label" disabled />
          <div style={styles.section}>With an error</div>
          <TextArea style={styles.textArea} placeholder="Enabled" errorLabel="With an error " />
          <TextArea style={styles.textArea} placeholder="Disabled" errorLabel="With an error" disabled />
          <div style={styles.section}>With a label and error</div>
          <TextArea style={styles.textArea} placeholder="Enabled" label="With a label" errorLabel="With an error" />
          <TextArea style={styles.textArea} placeholder="Disabled" label="With a label" errorLabel="With an error" disabled />
        </PanelBody>
        <PanelFooter>
        </PanelFooter>
      </Panel>;
    }} />;
  }
}
