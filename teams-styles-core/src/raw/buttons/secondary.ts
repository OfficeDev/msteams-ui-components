import { CSSProperties } from 'react';
import * as colors from '../colors';
import { Config } from '../config/index';
import * as baseButton from './base';

export function normal(config: Config): {} {
  const result: CSSProperties = {
    ...baseButton.normal(config),
    borderColor: colors.gray06,
    color: colors.black,
  };
  return result;
}

export function hover(config: Config): {} {
  const result: CSSProperties = {
    ...baseButton.hover(config),
    backgroundColor: colors.gray06,
    color: colors.black,
    borderColor: 'transparent',
  };
  return result;
}

export function active(config: Config): {} {
  const result: CSSProperties = {
    ...baseButton.active(config),
    backgroundColor: '#858C98',
  };
  return result;
}

export function disabled(config: Config): {} {
  return {
    ...baseButton.disabled(config),
    backgroundColor: 'transparent',
    color: colors.gray04,
    borderColor: colors.gray12,
  };
}

export function focus(config: Config): {} {
  return {
    ...baseButton.focus(config),
    backgroundColor: colors.gray06,
    color: colors.black,
    borderColor: colors.transparent,
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
    border: `${rem(0.2)} solid ${colors.black}`,
  };
}
