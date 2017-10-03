import { normalize, setupPage } from 'csstips';
import { Panel, Surface, Tab, TabGroup, TeamsComponentContext, ThemeStyle, Title } from 'msteams-ui-components-react';
import * as React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Content } from './content';
import { NavigationBar } from './navigation-bar';

const mountPoint = 'root';

normalize();
setupPage(`#${mountPoint}`);

export interface ContentState {
  fontSize: number;
  theme: ThemeStyle;
}

export class GHPages extends React.Component<{}, ContentState> {
  constructor() {
    super();
    this.onThemeChange = this.onThemeChange.bind(this);
    this.state = {
      fontSize: this.pageFontSize(),
      theme: ThemeStyle.Light,
    };
  }

  render() {
    return (
      <HashRouter>
        <TeamsComponentContext
          fontSize={this.state.fontSize}
          theme={this.state.theme}>
          <Surface style={{minHeight: '100%'}}>
              <Title>MSTeams UI Components</Title>
              <TabGroup selectedTabId={this.state.theme}>
                <Tab
                  tabId={ThemeStyle.Light}
                  onTabSelect={() => this.onThemeChange(ThemeStyle.Light)}>Light</Tab>
                <Tab
                  tabId={ThemeStyle.Dark}
                  onTabSelect={() => this.onThemeChange(ThemeStyle.Dark)}>Dark</Tab>
                <Tab
                  tabId={ThemeStyle.HighContrast}
                  onTabSelect={() => this.onThemeChange(ThemeStyle.HighContrast)}>High Contrast</Tab>
              </TabGroup>
              <Panel>
                <NavigationBar />
                <Content />
              </Panel>
          </Surface>
        </TeamsComponentContext>
      </HashRouter>
    );
  }

  private onThemeChange(newTheme: ThemeStyle) {
    this.setState({
      fontSize: this.pageFontSize(),
      theme: newTheme,
    });
  }

  private pageFontSize(): number {
    let fontSize = window.getComputedStyle(document.getElementsByTagName('html')[0]).getPropertyValue('font-size');
    fontSize = fontSize.replace('px', '');
    let size = parseInt(fontSize, 10);
    if (!size) {
      size = 16;
    }
    return size;
  }
}

render(
  <GHPages />,
  document.getElementById(mountPoint)
);
