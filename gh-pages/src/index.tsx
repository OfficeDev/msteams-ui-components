import { normalize, setupPage } from 'csstips';
import * as React from 'react';
import { render } from 'react-dom';
import { TeamsControlProvider } from 'teams-react-component';
import { cssRule } from 'typestyle';
import { ButtonSection } from './button-section';

const mountPoint = 'root';

normalize();
setupPage(`#${mountPoint}`);

render(
  <TeamsControlProvider>
    <ButtonSection />
  </TeamsControlProvider>,
  document.getElementById(mountPoint)
);
