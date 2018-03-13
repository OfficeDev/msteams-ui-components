import { Anchor, ConnectedComponent, Panel, PanelBody, PanelFooter, PanelHeader } from 'msteams-ui-components-react';
import * as React from 'react';

export const Description: React.StatelessComponent = () => {
  return <ConnectedComponent render={(props) => {
      const { context } = props;
      const { rem, font } = context;
      const { sizes, weights } = font;

      const styles = {
        header: { ...sizes.title, ...weights.semibold },
        section: { ...sizes.title2, marginTop: rem(1.4), marginBottom: rem(1.4) },
        button: {marginRight: rem(0.5) },
      };

      return <Panel>
        <PanelHeader>
          <div style={styles.header}>Home</div>
        </PanelHeader>
        <PanelBody>
          <div style={styles.section}>Intro</div>
          We've built a few libraries to help you make Microsoft Teams-styled apps.
          We hope that these libraries will enable seemless integration of your services into the
          <Anchor
            target="_blank"
            href="https://docs.microsoft.com/en-us/microsoftteams/platform/concepts/apps/apps-overview"
            > Microsoft Teams app ecosystem
          </Anchor>.
          <br/>
          Here they are:
          <ul>
            <li><Anchor
              target="_blank"
              href="https://www.npmjs.com/package/msteams-ui-styles-core">msteams-ui-styles-core
              </Anchor> - The core CSS styles of UI components. Independent of any UI framework.</li>
            <li><Anchor
              target="_blank"
              href="https://www.npmjs.com/package/msteams-ui-icons-core">msteams-ui-icons-core
              </Anchor> - The core set of Teams icons. Independent of any UI framework.</li>
            <li><Anchor
              target="_blank"
              href="https://www.npmjs.com/package/msteams-ui-components-react">msteams-ui-components-react
              </Anchor> - The React binding library. It depends on msteams-ui-styles-core and React.</li>
            <li><Anchor
              target="_blank"
              href="https://www.npmjs.com/package/msteams-ui-icons-react">
                msteams-ui-styles-react
              </Anchor> - The React binding library for the set of Teams icons.
              It depends on msteams-ui-icons-core and React.</li>
          </ul>
          For more information, the links above will take you to npmjs.com and show the usage instructions.
          <div style={styles.section}>About this page</div>
          This page was built using React and it uses the msteams-ui-components-react and msteams-ui-icons-react
          libraries to render and showcase the supported components.
          <br />
          You can find the code for this page
          <Anchor
            target="_blank"
            href="https://github.com/OfficeDev/msteams-ui-components/tree/master/gh-pages"> here.
          </Anchor>
        </PanelBody>
        <PanelFooter>
        </PanelFooter>
      </Panel>;
    }} />;
};
