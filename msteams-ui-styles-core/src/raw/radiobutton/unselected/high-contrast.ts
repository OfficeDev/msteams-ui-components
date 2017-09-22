import { CSSProperties } from 'react';
import { Context } from '../../context';
import { RadiobuttonStyles } from '../radiobutton-styles';

export function HighContrast(c: Context): RadiobuttonStyles {
  return {
    normal: {
      position: 'relative',
      ['-webkit-user-select']: 'none',
      ['-moz-user-select']: 'none',
      ['-ms-user-select']: 'none',
      userSelect: 'none',
      display: 'inline-block',
      cursor: 'pointer',
      width: c.rem(2),
      height: c.rem(2),
      margin: c.rem(0.6),
      border: `${c.rem(0.2)} solid`,
      borderRadius: '100%',
      borderColor: c.colors.white,
      backgroundColor: c.colors.highContrast.black,
    },
    hover: {
      backgroundColor: c.colors.highContrast.black,
    },
    active: {},
    disabled: {
      backgroundColor: c.colors.highContrast.green,
      borderColor: c.colors.white,
    },
    focus: {
      boxShadow: `0 0 0 ${c.rem(0.4)} ${c.colors.highContrast.yellow}`,
      outline: 'none',
    },
  };
}
