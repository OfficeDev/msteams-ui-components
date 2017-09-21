import { CSSProperties } from 'react';
import { Context } from '../context';

export function normal(c: Context): {} {
  const result: CSSProperties = {
    textDecoration: 'none',
    color: c.colors.anchor.normal,
  };
  return result;
}

export function hover(c: Context): {} {
  const result: CSSProperties = {
    textDecoration: 'underline',
    color: c.colors.anchor.hover,
  };
  return result;
}

export function down(c: Context): {} {
  const result: CSSProperties = {
    textDecoration: 'underline',
    color: c.colors.anchor.down,
  };
  return result;
}

export function disabled(c: Context): {} {
  const result: CSSProperties = {
    textDecoration: 'none',
    color: c.colors.anchor.disabled,
  };
  return result;
}

export function focus(c: Context): {} {
  const result: CSSProperties = {
    textDecoration: 'underline',
    color: c.colors.anchor.focus,
  };
  return result;
}

export function visited(c: Context): {} {
  const result: CSSProperties = {
    textDecoration: 'none',
    color: c.colors.anchor.visited,
  };
  return result;
}
