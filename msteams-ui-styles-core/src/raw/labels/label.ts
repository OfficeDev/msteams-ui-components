import { CSSProperties } from 'react';
import { Context } from '../context';

export function normal(c: Context): {} {
  const result: CSSProperties = {
    color: c.colors.light.black,
  };
  return result;
}

export function disabled(c: Context): {} {
  return {
  };
}

export function focus(c: Context): {} {
  return {
  };
}

export function focusAfter(c: Context): {} {
  return {
  };
}
