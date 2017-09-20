import { normalize, setupPage } from 'csstips';
import * as React from 'react';
import { render } from 'react-dom';
import { Panel, TeamsComponentContext, ThemeType } from 'teams-react-component';
import { cssRule } from 'typestyle';
import { ButtonSection } from './button-section';

const mountPoint = 'root';

normalize();
setupPage(`#${mountPoint}`);

function renderPage(basePx: number, theme: ThemeType) {
  function onBasePxChange(newBasePx: string) {
    renderPage(parseInt(newBasePx, 10), theme);
  }

  function onThemeChange(newTheme: ThemeType) {
    renderPage(basePx, newTheme);
  }

  render(
    <TeamsComponentContext basePx={basePx} theme={theme} >
      <Panel>
        <label htmlFor="basePx">1rem = </label>
        <input
          id="basePx"
          style={{width: '40px', textAlign: 'right'}}
          value={basePx}
          onChange={(event) => onBasePxChange(event.target.value)} />px
        <br/>
        <input
          type="radio"
          name="theme"
          onChange={(event) => onThemeChange(ThemeType.Default)}
          checked={theme === ThemeType.Default}/>
        <label>Default </label>
        <br/>
        <input
          type="radio"
          name="theme"
          onChange={(event) => onThemeChange(ThemeType.Dark)}
          checked={theme === ThemeType.Dark}/>
        <label>Dark </label>
        <br/>
        <input
          type="radio"
          name="theme"
          onChange={(event) => onThemeChange(ThemeType.HighContrast)}
          checked={theme === ThemeType.HighContrast}/>
        <label>Contrast </label>
        <ButtonSection />
      </Panel>
    </TeamsComponentContext>,
    document.getElementById(mountPoint)
  );
}

renderPage(16, ThemeType.Default);
