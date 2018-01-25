class DropdownExample extends React.Component {
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
          <div style={styles.header}>Dropdowns</div>
        </PanelHeader>
        <PanelBody>
  <div>
    <div style={styles.section}>No Label</div>
    <Dropdown
      autoFocus
      mainButtonText="left dropdown"
      style={{ width: '100%' }}
      items={[
        { text: 'option1', onClick: () => console.log('hello') },
        { text: 'option2', onClick: () => console.log('hello') },
        { text: 'option3', onClick: () => console.log('hello') },
        { text: 'option4', onClick: () => console.log('hello') }
      ]}
    />
  </div>

  <div>
  <div style={styles.section}>With a label</div>
    <Dropdown
      menuRightAlign
      mainButtonText="right dropdown" 
      label="I'm a label"
      style={{ width: '100%' }}
      items={[
        { text: 'option1', onClick: () => alert('hello') },
        { text: 'option2', onClick: () => alert('hello') },
        { text: 'option3', onClick: () => alert('hello') },
        { text: 'option4', onClick: () => alert('hello') }
      ]}
    />
  </div>

  <div>
    <div style={styles.section}>Custom content in items</div>
    <Dropdown
      mainButtonText="small dropdown"
      style={{ width: '100%' }}
      label="Customized item content"
      items={[
        {
          render: () => <MSTeamsIcon iconWeight={MSTeamsIconWeight.Light} iconType={MSTeamsIconType.IllustrationMonkey} />,
          onClick: () => alert('hello'),
        }
      ]}
    />
  </div>

  <div>
    <div style={styles.section}>Small dropdown</div>
    <Dropdown
      mainButtonText="small dropdown"
      style={{ width: '150px' }}
      label="Default icon"
      items={[
        {
          text: 'Lonnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnng item text',
          onClick: () => alert('hello'),
        }
      ]}
    />
  </div>

  <div>
    <div style={styles.section}>Icon only dropdown</div>
    <Dropdown
      items={[
        { text: 'Option 1', onClick: () => alert('hello') }
      ]}
    />
  </div>
        </PanelBody>
        <PanelFooter>
        </PanelFooter>
      </Panel>;
    }} />;
  }
}
