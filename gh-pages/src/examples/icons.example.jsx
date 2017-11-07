class IconExample extends React.Component {
  render() {
    return <ConnectedComponent render={(props) => {
      const { context } = props;
      const { rem, font } = context;
      const { sizes, weights } = font;

      const styles = {
        header: {...sizes.title, ...weights.semibold},
        section: {...sizes.title2, marginTop: rem(1.4), marginBottom: rem(1.4)},
        table: {width: rem(10)},
      }

      return <Panel>
        <PanelHeader>
          <div style={styles.header}>Icons</div>
        </PanelHeader>
        <PanelBody>
          <div style={styles.section}></div>
          <Table style={styles.table}>
            <THead>
              <Tr>
                <Th>Icon Name</Th>
                <Th>Regular</Th>
                <Th>Light</Th>
              </Tr>
            </THead>
            <TBody>
              {Object.keys(MSTeamsIconType).map((iconTypeKey) => {
                return <Tr key={iconTypeKey}>
                  <Td>{iconTypeKey}</Td>
                  <Td>
                    <MSTeamsIcon
                      iconWeight={MSTeamsIconWeight.regular} 
                      iconType={MSTeamsIconType[iconTypeKey]} />
                  </Td>
                  <Td>
                    <MSTeamsIcon
                      iconWeight={MSTeamsIconWeight.light} 
                      iconType={MSTeamsIconType[iconTypeKey]} />
                  </Td>
                </Tr>;
              })}
            </TBody>
          </Table>
        </PanelBody>
        <PanelFooter>
        </PanelFooter>
      </Panel>;
    }} />;
  }
}
