import { CSSProperties } from 'react';
import { Context } from '../../context';
import { RadiobuttonStyles } from '../radiobutton-styles';

export function HighContrast(c: Context): RadiobuttonStyles {
  return {
    normal: {
      borderColor: c.colors.transparent,
      backgroundColor: c.colors.highContrast.yellow,
    },
    hover: {
      borderColor: c.colors.transparent,
      backgroundColor: c.colors.highContrast.yellow,
    },
    active: {},
    disabled: {},
    focus: {},
  };
}
