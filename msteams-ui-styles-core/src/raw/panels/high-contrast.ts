import { CSSProperties } from 'react';
import { Context } from '../context';
import { PanelStyles } from './panel-styles';

export function HighContrast(c: Context): PanelStyles {
  return {
    normal: {
      backgroundColor: c.colors.black,
    },
  };
}
