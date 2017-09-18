import { CSSProperties } from 'react';
import { Config } from '../config/index';
import * as baseButton from './base';

const appBrand = '#5558af';
const appWhite = '#fff';

export function normal(config: Config): {} {
  const result: CSSProperties = {
    ...baseButton.normal(config),
    background: appBrand,
    outlineColor: 'yellow',
    outlineStyle: 'none',
    color: appWhite,
  };
  return result;
}

export function hover(config: Config): {} {
  const result: CSSProperties = {
    ...baseButton.hover(config),
    color: 'blue',
  };
  return result;
}
