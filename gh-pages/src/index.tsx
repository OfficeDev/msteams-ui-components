import { normalize, setupPage } from 'csstips';
import * as React from 'react';
import { render } from 'react-dom';
import { Panel, TeamsComponentContext, ThemeType } from 'teams-react-component';
import { cssRule } from 'typestyle';
import { ButtonSection } from './button-section';

const mountPoint = 'root';

normalize();
setupPage(`#${mountPoint}`);

interface GHPagesState {
  basePx: number;
  theme: ThemeType;
}

class GHPages extends React.Component<{}, GHPagesState> {
  constructor() {
    super();
    this.state = {
      basePx: 16,
      theme: ThemeType.Default,
    };
  }

  onBasePxChange(newBasePx: string) {
    this.setState({
      basePx: parseInt(newBasePx, 10),
      theme: this.state.theme,
    });
  }

  onThemeChange(newTheme: ThemeType) {
    this.setState({
      basePx: this.state.basePx,
      theme: newTheme,
    });
  }

  render() {
    const { basePx, theme } = this.state;

    return (
      <TeamsComponentContext basePx={basePx} theme={theme} >
        <Panel style={{ width: '100%', height: '100%', padding: '5px 30px' }}>
          <label htmlFor="basePx">1rem = </label>
          <input
            id="basePx"
            type="range"
            min="1"
            max="50"
            value={basePx}
            onChange={(event) => this.onBasePxChange(event.target.value)} /> {basePx}px
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
          <label>Contrast </label>
          <ButtonSection />
        </Panel>
      </TeamsComponentContext>
    );
  }
}
render(
  <GHPages />,
  document.getElementById(mountPoint)
);
