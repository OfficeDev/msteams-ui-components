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

export function active(config: Config): {} {
  const result: CSSProperties = {
    ...baseButton.active(config),
    backgroundColor: '#454B92',
  };
  return result;
}

export function disabled(config: Config): {} {
  return {
    ...baseButton.disabled(config),
    backgroundColor: colors.gray10,
    color: colors.gray04,
  };
}

export function focus(config: Config): {} {
  return {
    ...baseButton.focus(config),
    color: colors.white,
  };
}

export function focusAfter(config: Config): {} {
  const { rem } = config;
  return {
    content: "''",
    position: 'absolute',
    top: '1px',
    bottom: '1px',
    left: '1px',
    right: '1px',
    border: `${rem(0.2)} solid ${colors.white}`,
  };
}
