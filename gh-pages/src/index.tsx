import { normalize, setupPage } from 'csstips';
import { Panel, TeamsComponentContext, ThemeType } from 'msteams-ui-components-react';
import { Radiobutton, RadiobuttonGroup } from 'msteams-ui-components-react';
import * as React from 'react';
import { render } from 'react-dom';
import { ButtonSection } from './button-section';
import { CheckboxSection } from './checkbox-section';
import { InputSection } from './input-section';
import { LinkSection } from './link-section';
import { RadiobuttonSection } from './radiobutton-section';
import { TogglesSection } from './toggles-section';

const mountPoint = 'root';

normalize();
setupPage(`#${mountPoint}`);

interface GHPagesState {
  fontSize: number;
  theme: ThemeType;
}

class GHPages extends React.Component<{}, GHPagesState> {
  constructor() {
    super();
    this.onThemeChange = this.onThemeChange.bind(this);
    this.onFontSizeChange = this.onFontSizeChange.bind(this);
    this.state = {
      fontSize: this.pageFontSize(),
      theme: ThemeType.Default,
    };
  }

  render() {
    const { fontSize, theme } = this.state;

    return (
      <TeamsComponentContext fontSize={fontSize} theme={theme} >
        <Panel style={{ minHeight: '100%', padding: '5px 30px 30px 50px', margin: '0' }}>
          <label htmlFor="baseFontSize">1rem = </label>
          <input
            id="baseFontSize"
            type="range"
            min="1"
            max="50"
            value={fontSize}
            onChange={(event) => this.onFontSizeChange(event.target.value)} /> {fontSize}px
        <br />
          <RadiobuttonGroup onSelected={this.onThemeChange} value={theme}>
            <Radiobutton label="Default" value={ThemeType.Default} />
            <Radiobutton label="Dark" value={ThemeType.Dark} />
            <Radiobutton label="High Contrast" value={ThemeType.HighContrast} />
          </RadiobuttonGroup>
          <ButtonSection />
          <TogglesSection />
          <CheckboxSection />
          <LinkSection />
          <InputSection />
          <RadiobuttonSection />
        </Panel>
      </TeamsComponentContext>
    );
  }

  private onFontSizeChange(newFontSize: string) {
    this.setState({
      fontSize: parseInt(newFontSize, 10),
      theme: this.state.theme,
    });
  }

  private onThemeChange(newTheme: ThemeType) {
    this.setState({
      fontSize: this.state.fontSize,
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
