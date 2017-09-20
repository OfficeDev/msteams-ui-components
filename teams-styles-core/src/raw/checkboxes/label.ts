import { CSSProperties } from 'react';
import * as colors from '../colors';
import { Context } from '../context';
import * as baseLabel from '../labels/label';

export function normal(c: Context): {} {
  const result: CSSProperties = {
    ...baseLabel.normal(c),
  };
  return result;
}
