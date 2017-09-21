import { CSSProperties } from 'react';
import * as colors from '../colors';
import { Context } from '../context';

export function normal(c: Context): {} {
  const result: CSSProperties = {
    position: 'relative',
    ['-webkit-user-select']: 'none',
    ['-moz-user-select']: 'none',
    ['-ms-user-select']: 'none',
    userSelect: 'none',
    display: 'inline-block',
    cursor: 'pointer',
    width: c.rem(1.6),
    height: c.rem(1.6),
    margin: c.rem(1.6),
    border: `${c.rem(0.1)} solid`,
    borderRadius: '100%',
    borderColor: c.colors.checkbox.normal.border,
    backgroundColor: c.colors.checkbox.normal.background,
  };

  return result;
}

export function hover(c: Context): {} {
  if (!c.colors.checkbox.hover) {
    return {};
  }

  return {
    backgroundColor: c.colors.checkbox.hover.background,
    borderColor: c.colors.checkbox.hover.border,
  };
}

export function active(c: Context): {} {
  if (!c.colors.checkbox.active) {
    return {};
  }

  return {
    backgroundColor: c.colors.checkbox.active.background,
    borderColor: c.colors.checkbox.active.border,
  };
}

export function disabled(c: Context): {} {
  if (!c.colors.checkbox.disabled) {
    return {};
  }

  return {
    backgroundColor: c.colors.checkbox.disabled.background,
    borderColor: c.colors.checkbox.disabled.border,
  };
}

export function focus(c: Context): {} {
  if (!c.colors.checkbox.focus) {
    return {};
  }

  const props: CSSProperties = {
    backgroundColor: c.colors.checkbox.focus.background,
    borderColor: c.colors.checkbox.focus.border,
    boxShadow: `0 0 0 ${c.rem(0.2)} ${c.colors.checkbox.focus.outline}`,
    outline: 'none',
  };

  return props;
}
