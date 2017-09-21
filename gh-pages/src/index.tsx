import { normalize, setupPage } from 'csstips';
import * as React from 'react';
import { render } from 'react-dom';
import { Panel, TeamsComponentContext, ThemeType } from 'teams-react-component';
import { cssRule } from 'typestyle';
import { ButtonSection } from './button-section';
import { CheckboxSection } from './checkbox-section';
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
    this.state = {
      fontSize: this.pageFontSize(),
      theme: ThemeType.Default,
    };
  }

  render() {
    const { fontSize, theme } = this.state;

    return (
      <TeamsComponentContext fontSize={fontSize} theme={theme} >
        <Panel style={{ width: '100%', height: '100%', padding: '5px 30px' }}>
          <label htmlFor="baseFontSize">1rem = </label>
          <input
            id="baseFontSize"
            type="range"
            min="1"
            max="50"
            value={fontSize}
            onChange={(event) => this.onBasePxChange(event.target.value)} /> {fontSize}px
        <br />
          <input
            type="radio"
            name="theme"
            onChange={(event) => this.onThemeChange(ThemeType.Default)}
            checked={theme === ThemeType.Default} />
          <label>Default </label>
          <br />
          <input
            type="radio"
            name="theme"
            onChange={(event) => this.onThemeChange(ThemeType.Dark)}
            checked={theme === ThemeType.Dark} />
          <label>Dark </label>
          <br />
          <input
            type="radio"
            name="theme"
            onChange={(event) => this.onThemeChange(ThemeType.HighContrast)}
            checked={theme === ThemeType.HighContrast} />
          <label>High Contrast </label>
          <ButtonSection />
          <TogglesSection />
          <CheckboxSection />
        </Panel>
      </TeamsComponentContext>
    );
  }

  private onBasePxChange(newFontSize: string) {
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
    let fontSize = window.getComputedStyle(document.body).getPropertyValue('font-size');
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
