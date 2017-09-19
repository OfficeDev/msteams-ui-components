import { CSSProperties } from 'react';
import { Config } from '../config/index';

const appSmallBorderRadius = 0.3;

export function normal(config: Config): CSSProperties {
  const { rem } = config;
  return {
    height: rem(3.2),
    minWidth: rem(3.2),
    background: '0',
    border: rem(0.2) + ' solid transparent',
    borderRadius: rem(appSmallBorderRadius),
    padding: rem(0.4) + ' ' + rem(3.2),
    whiteSpace: 'nowrap',
    fontSize: rem(1.4),
    position: 'relative',
  };
}

export function hover(config: Config): CSSProperties {
  return {
    cursor: 'pointer',
  };
}

export function active(config: Config): CSSProperties {
  return {};
}

export function disabled(config: Config): CSSProperties {
  return {};
}

export function focus(config: Config): CSSProperties {
  return {
    outline: 'none',
  };
}
