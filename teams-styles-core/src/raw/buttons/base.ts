import { CSSProperties } from 'react';
import { Context } from '../context';

const appSmallBorderRadius = 0.3;

export function normal(context: Context): CSSProperties {
  const { rem } = context;
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

export function hover(context: Context): CSSProperties {
  return {
    cursor: 'pointer',
  };
}

export function active(context: Context): CSSProperties {
  return {};
}

export function disabled(context: Context): CSSProperties {
  return {
    cursor: 'not-allowed',
  };
}

export function focus(context: Context): CSSProperties {
  return {
    outline: 'none',
  };
}
