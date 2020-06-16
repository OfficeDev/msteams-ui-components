class IconExample extends React.Component {
  render() {
    return <TeamsThemeContext.Consumer>
      {(context) => {
        const { rem, font } = context;
        const { sizes, weights } = font;

        const styles = {
          header: { ...sizes.title, ...weights.semibold },
          section: { ...sizes.title2, marginTop: rem(1.4), marginBottom: rem(1.4) },
          table: { width: '100%' },
          th: {
            textAlign: 'left',
            display: 'flex',
            flexFlow: 'row nowrap',
            overflow: 'hidden',
            paddingLeft: rem(1.6),
            paddingRight: rem(1.6),
            paddingTop: rem(1.4),
            paddingBottom: rem(0.6),
            $nest: {
              '&:last-child:not(:only-child)': {
                paddingLeft: 0,
              },
            },
            flexGrow: 1,
            flexBasis: rem(2),
          },
          td: {
            display: 'flex',
            flexFlow: 'row nowrap',
            overflow: 'hidden',
            paddingLeft: rem(1.6),
            paddingRight: rem(1.6),
            paddingTop: rem(1.4),
            paddingBottom: rem(1.4),
            $nest: {
              '&:last-child:not(:only-child)': {
                paddingLeft: 0,
              },
            },
            flexGrow: 1,
            flexBasis: rem(1),
          }
        }

        const icons = Object.keys(MSTeamsIconType);
        const rows = [];
        for (i = 0; i < icons.length; i += 4) {
          first = icons[i];
          second = icons[i + 1];
          third = icons[i + 2];
          fourth = icons[i + 3];
          rows.push(
            <Tr key={i}>
              <Td style={styles.td}>{first}</Td>
              <Td style={styles.td}>
                <MSTeamsIcon
                  tabIndex={0}
                  aria-label={first}
                  iconWeight={MSTeamsIconWeight.Regular}
                  iconType={MSTeamsIconType[first]} />
              </Td>
              <Td style={styles.td}>
                <MSTeamsIcon
                  tabIndex={0}
                  aria-label={first}
                  iconWeight={MSTeamsIconWeight.Light}
                  iconType={MSTeamsIconType[first]} />
              </Td>
              <Td style={styles.td}>{second}</Td>
              <Td style={styles.td}>
                <MSTeamsIcon
                  tabIndex={0}
                  aria-label={second}
                  iconWeight={MSTeamsIconWeight.Regular}
                  iconType={MSTeamsIconType[second]} />
              </Td>
              <Td style={styles.td}>
                <MSTeamsIcon
                  tabIndex={0}
                  aria-label={second}
                  iconWeight={MSTeamsIconWeight.Light}
                  iconType={MSTeamsIconType[second]} />
              </Td>
              <Td style={styles.td}>{third}</Td>
              <Td style={styles.td}>
                <MSTeamsIcon
                  tabIndex={0}
                  aria-label={third}
                  iconWeight={MSTeamsIconWeight.Regular}
                  iconType={MSTeamsIconType[third]} />
              </Td>
              <Td style={styles.td}>
                <MSTeamsIcon
                  tabIndex={0}
                  aria-label={third}
                  iconWeight={MSTeamsIconWeight.Light}
                  iconType={MSTeamsIconType[third]} />
              </Td>
              <Td style={styles.td}>{fourth}</Td>
              <Td style={styles.td}>
                <MSTeamsIcon
                  tabIndex={0}
                  aria-label={fourth}
                  iconWeight={MSTeamsIconWeight.Regular}
                  iconType={MSTeamsIconType[fourth]} />
              </Td>
              <Td style={styles.td}>
                <MSTeamsIcon
                  tabIndex={0}
                  aria-label={fourth}
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
                  <Th style={styles.th}>Icon Name</Th>
                  <Th style={styles.th}>Regular</Th>
                  <Th style={styles.th}>Light</Th>
                  <Th style={styles.th}>Icon Name</Th>
                  <Th style={styles.th}>Regular</Th>
                  <Th style={styles.th}>Light</Th>
                  <Th style={styles.th}>Icon Name</Th>
                  <Th style={styles.th}>Regular</Th>
                  <Th style={styles.th}>Light</Th>
                  <Th style={styles.th}>Icon Name</Th>
                  <Th style={styles.th}>Regular</Th>
                  <Th style={styles.th}>Light</Th>
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
      }}
    </TeamsThemeContext.Consumer>
  }
}
