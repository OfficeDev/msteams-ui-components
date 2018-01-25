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
          <div style={styles.header}>Links</div>
        </PanelHeader>
        <PanelBody>
          <div style={styles.section}></div>
          <Anchor autoFocus href="#" onClick={(e) => e.preventDefault()}>a link</Anchor>
        </PanelBody>
        <PanelFooter>
        </PanelFooter>
      </Panel>;
    }} />;
  }
}
