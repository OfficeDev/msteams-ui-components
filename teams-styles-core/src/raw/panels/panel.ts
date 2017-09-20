import { CSSProperties } from 'react';
import { Context } from '../context';

export function normal(c: Context): {} {
  const result: CSSProperties = {
    backgroundColor: c.colors.background,
  };
  return result;
}
