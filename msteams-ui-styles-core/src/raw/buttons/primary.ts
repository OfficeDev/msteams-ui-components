import { CSSProperties } from 'react';
import { Context } from '../context';
import * as baseButton from './base';

export function normal(c: Context): {} {
  const result: CSSProperties = {
    ...baseButton.normal(c),
    backgroundColor: c.colors.primaryButton.normalBg,
    color: c.colors.primaryButton.textColor,
  };
  return result;
}

export function hover(c: Context): {} {
  const result: CSSProperties = {
    ...baseButton.hover(c),
    backgroundColor: c.colors.primaryButton.hoverBg,
  };
  return result;
}

export function active(c: Context): {} {
  const result: CSSProperties = {
    ...baseButton.active(c),
    backgroundColor: c.colors.primaryButton.activeBg,
  };
  return result;
}

export function disabled(c: Context): {} {
  return {
    ...baseButton.disabled(c),
    backgroundColor: c.colors.primaryButton.disabledBg,
    color: c.colors.primaryButton.disabled,
  };
}

export function focus(c: Context): {} {
  return {
    ...baseButton.focus(c),
    color: c.colors.primaryButton.focus,
  };
}

export function focusAfter(c: Context): {} {
  const { rem } = c;
  return {
    content: "''",
    position: 'absolute',
    top: '1px',
    bottom: '1px',
    left: '1px',
    right: '1px',
    border: `${rem(0.2)} solid ${c.colors.primaryButton.focusOutline}`,
  };
}
