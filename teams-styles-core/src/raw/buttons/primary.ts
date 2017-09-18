import { CSSProperties } from 'react';
import { defaultButton } from './button';

const appBrand = '#5558af';
const appWhite = '#fff';

export const primary: {} = {
  ...defaultButton,
  background: appBrand,
  outlineColor: 'yellow',
  outlineStyle: 'none',
  color: appWhite,
} as CSSProperties;

export const primaryHover: {} = {
  color: 'blue',
} as CSSProperties;
