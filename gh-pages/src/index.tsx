import { normalize, setupPage } from 'csstips';
import { Panel, Surface, Tab, TabGroup, TeamsComponentContext, ThemeStyle } from 'msteams-ui-components-react';
import * as React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { AppLayout } from './app-layout';
import { Content } from './content';
import { Sidebar } from './sidebar';

const mountPoint = 'root';

normalize();
setupPage(`#${mountPoint}`);

export interface ContentState {
  fontSize: number;
  theme: ThemeStyle;
}

export class GHPages extends React.Component<{}, ContentState> {
  state = {
    theme: ThemeStyle.Light,
    fontSize: 16,
  };

  componentWillMount() {
    this.updateTheme(this.getQueryVariable('theme'));
    this.setState({
      fontSize: this.pageFontSize(),
    });

    if (this.inTeams()) {
      microsoftTeams.initialize();
      microsoftTeams.registerOnThemeChangeHandler(this.updateTheme);
    }
  }

  render() {
    return (
      <HashRouter>
        <TeamsComponentContext
          fontSize={this.state.fontSize}
          theme={this.state.theme}>
          <AppLayout sidebar={Sidebar} main={Content}/>
        </TeamsComponentContext>
      </HashRouter>
    );
  }

  private updateTheme = (themeStr?: string | null): void => {
    let theme;
    switch (themeStr) {
      case 'dark':
        theme = ThemeStyle.Dark;
        break;
      case 'contrast':
        theme = ThemeStyle.HighContrast;
        break;
      case 'default':
      default:
        theme = ThemeStyle.Light;
    }
    this.setState({theme});
  }

  private inTeams = (): boolean => {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  }

  private pageFontSize = (): number => {
    let sizeStr = window.getComputedStyle(document.getElementsByTagName('html')[0]).getPropertyValue('font-size');
    sizeStr = sizeStr.replace('px', '');
    let fontSize = parseInt(sizeStr, 10);
    if (!fontSize) {
      fontSize = 16;
    }
    return fontSize;
  }

  private getQueryVariable = (variable: string): string | null => {
    const query = window.location.search.substring(1);
    const vars = query.split('&');
    for (const varPairs of vars) {
        const pair = varPairs.split('=');
        if (decodeURIComponent(pair[0]) === variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    return null;
  }
}

render(
  <GHPages />,
  document.getElementById(mountPoint)
);
