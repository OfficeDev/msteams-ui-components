import { CSSProperties } from 'react';
import * as colors from '../colors';
import { Context } from '../context';

export function normal(c: Context): {} {
  if (!c.colors.checkbox.checked) {
    return {};
  }

  return {
    borderColor: c.colors.checkbox.checked.border,
    backgroundColor: c.colors.checkbox.checked.background,
    outline: c.colors.checkbox.checked.outline,
  };
}

export function hover(c: Context): {} {
  if (!c.colors.checkbox.checked) {
    return {};
  }

  return {
    borderColor: c.colors.checkbox.checked.border,
    backgroundColor: c.colors.checkbox.checked.background,
  };
}

export function before(c: Context): {} {
  return {
    content: '"✓"',
    color: c.colors.checkbox.normal.text,
    position: 'absolute',
    fontSize: c.rem(1.8),
    top: `-${c.rem(0.1)}`,
    left: c.rem(0.1),
  };
}
