import { Anchor, Panel, PanelBody, PanelFooter, PanelHeader, TeamsThemeContext } from 'msteams-ui-components-react';
import * as React from 'react';

export const Description: React.FunctionComponent = () => {
  return <TeamsThemeContext.Consumer>
    {(context) => {
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
          <p>
          We've built a few libraries to help you make apps styled after the Microsoft Teams design guidelines.
          These give you controls, styles, and fonts that will easily make your apps have the look and feel
          common to other
          <Anchor
            target="_blank"
            href="https://docs.microsoft.com/en-us/microsoftteams/platform/concepts/apps/apps-overview"
            > Microsoft Teams apps
          </Anchor>.
          </p>
          <p>
          Here they are:
          </p>
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
          <p>
          For more information, the links above will take you to npmjs.com and show the usage instructions.
          </p>
          <p>
          We are considering additional libraries for, e.g., Angular bindings. We welcome your feedback and
          suggestions at
         <Anchor
            target="_blank"
            href="mailto:microsoftteamsdev@microsoft.com"
            > microsoftteamsdev@microsoft.com
          </Anchor>.
          </p>
          <div style={styles.section}>About this page</div>
          <p>
          This page was built using React and it uses the msteams-ui-components-react and msteams-ui-icons-react
          libraries to render and showcase the supported components.
          </p>
          <p>
          You can find the code for this page
          <Anchor
            target="_blank"
            href="https://github.com/OfficeDev/msteams-ui-components/tree/master/gh-pages"> here.
          </Anchor>
          </p>
        </PanelBody>
        <PanelFooter>
        </PanelFooter>
      </Panel>;
    }}
  </TeamsThemeContext.Consumer>;
};
