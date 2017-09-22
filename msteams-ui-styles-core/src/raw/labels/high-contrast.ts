import { CSSProperties } from 'react';
import { Context } from '../context';
import { LabelStyles } from './label-styles';

export function HighContrast(c: Context): LabelStyles {
  return {
    normal: {
      color: c.colors.white,
    },
  };
}
