import { CSSProperties } from 'react';
import * as colors from '../colors';
import { Context } from '../context';
import * as box from './box';

export function normal(c: Context): {} {
  if (!c.colors.checkbox.checked) {
    return box.normal(c);
  }

  return {
    ...box.normal(c),
    borderColor: c.colors.checkbox.checked.border,
    backgroundColor: c.colors.checkbox.checked.background,
    outline: c.colors.checkbox.checked.outline,
  };
}

export function hover(c: Context): {} {
  if (!c.colors.checkbox.checked) {
    return box.hover(c);
  }

  return {
    ...box.hover(c),
    borderColor: c.colors.checkbox.checked.border,
    backgroundColor: c.colors.checkbox.checked.background,
  };
}

export function active(c: Context): {} {
  return box.active(c);
}

export function disabled(c: Context): {} {
  return box.disabled(c);
}

export function focus(c: Context): {} {
  return box.focus(c);
}

export function after(c: Context): {} {
  return {
    content: '"\\2713"',
    color: c.colors.checkbox.normal.text,
    position: 'absolute',
    fontSize: c.rem(1.4),
    top: `-${c.rem(0.1)}`,
    left: c.rem(0.2),
  };
}
