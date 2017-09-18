import { CSSProperties } from 'react';
import * as colors from '../colors';
import { Config } from '../config/index';
import * as baseButton from './base';

export function normal(config: Config): {} {
  const result: CSSProperties = {
    ...baseButton.normal(config),
    background: colors.brand00,
    outlineColor: 'yellow',
    outlineStyle: 'none',
    color: colors.white,
  };
  return result;
}

export function hover(config: Config): {} {
  const result: CSSProperties = {
    ...baseButton.hover(config),
    backgroundColor: colors.brand04,
  };
  return result;
}
