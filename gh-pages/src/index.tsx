import { normalize, setupPage } from 'csstips';
import * as React from 'react';
import { render } from 'react-dom';
import { cssRule } from 'typestyle';
import { ButtonSection } from './button-section';

const mountPoint = 'root';

normalize();
setupPage(`#${mountPoint}`);

render(
  <div>
    <ButtonSection />
  </div>,
  document.getElementById(mountPoint)
);
