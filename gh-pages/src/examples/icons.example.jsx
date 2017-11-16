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

      const icons = Object.keys(MSTeamsIconType);
      const rows = [];
      for(i = 0; i < icons.length; i+=4) {
        first = icons[i];
        second = icons[i+1];
        third = icons[i+2];
        fourth = icons[i+3];
        rows.push(
          <Tr key={i}>
            <Td style={{textAlign: 'right', paddingRight: rem(3.2)}}>{first}</Td>
            <Td style={{textAlign: 'center'}}>
              <MSTeamsIcon
                iconWeight={MSTeamsIconWeight.Regular} 
                iconType={MSTeamsIconType[first]} />
            </Td>
            <Td style={{textAlign: 'center'}}>
              <MSTeamsIcon
                iconWeight={MSTeamsIconWeight.Light} 
                iconType={MSTeamsIconType[first]} />
            </Td>
            <Td style={{textAlign: 'right', paddingRight: rem(3.2)}}>{second}</Td>
            <Td style={{textAlign: 'center'}}>
              <MSTeamsIcon
                iconWeight={MSTeamsIconWeight.Regular} 
                iconType={MSTeamsIconType[second]} />
            </Td>
            <Td style={{textAlign: 'center'}}>
              <MSTeamsIcon
                iconWeight={MSTeamsIconWeight.Light} 
                iconType={MSTeamsIconType[second]} />
            </Td>
            <Td style={{textAlign: 'right', paddingRight: rem(3.2)}}>{third}</Td>
            <Td style={{textAlign: 'center'}}>
              <MSTeamsIcon
                iconWeight={MSTeamsIconWeight.Regular} 
                iconType={MSTeamsIconType[third]} />
            </Td>
            <Td style={{textAlign: 'center'}}>
              <MSTeamsIcon
                iconWeight={MSTeamsIconWeight.Light} 
                iconType={MSTeamsIconType[third]} />
            </Td>
            <Td style={{textAlign: 'right', paddingRight: rem(3.2)}}>{fourth}</Td>
            <Td style={{textAlign: 'center'}}>
              <MSTeamsIcon
                iconWeight={MSTeamsIconWeight.Regular} 
                iconType={MSTeamsIconType[fourth]} />
            </Td>
            <Td style={{textAlign: 'center'}}>
              <MSTeamsIcon
                iconWeight={MSTeamsIconWeight.Light} 
                iconType={MSTeamsIconType[fourth]} />
            </Td>
          </Tr>
        );
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
                <Th style={{textAlign: 'right', paddingRight: rem(3.2)}}>Icon Name</Th>
                <Th style={{textAlign: 'center'}}>Regular</Th>
                <Th style={{textAlign: 'center'}}>Light</Th>
                <Th style={{textAlign: 'right', paddingRight: rem(3.2)}}>Icon Name</Th>
                <Th style={{textAlign: 'center'}}>Regular</Th>
                <Th style={{textAlign: 'center'}}>Light</Th>
                <Th style={{textAlign: 'right', paddingRight: rem(3.2)}}>Icon Name</Th>
                <Th style={{textAlign: 'center'}}>Regular</Th>
                <Th style={{textAlign: 'center'}}>Light</Th>
                <Th style={{textAlign: 'right', paddingRight: rem(3.2)}}>Icon Name</Th>
                <Th style={{textAlign: 'center'}}>Regular</Th>
                <Th style={{textAlign: 'center'}}>Light</Th>
              </Tr>
            </THead>
            <TBody>
              {rows}
            </TBody>
          </Table>
        </PanelBody>
        <PanelFooter>
        </PanelFooter>
      </Panel>;
    }} />;
  }
}
