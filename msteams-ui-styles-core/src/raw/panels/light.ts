import { CSSProperties } from 'react';
import { Context } from '../context';
import { PanelStyles } from './panel-styles';

export function Light(c: Context): PanelStyles {
  return {
    normal: {
      backgroundColor: c.colors.light.white,
    },
  };
}
