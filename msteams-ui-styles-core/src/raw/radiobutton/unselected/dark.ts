import { CSSProperties } from 'react';
import { Context } from '../../context';
import { RadiobuttonStyles } from '../radiobutton-styles';

export function Dark(c: Context): RadiobuttonStyles {
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
      borderColor: c.colors.dark.gray03,
      backgroundColor: c.colors.dark.black,
    },
    hover: {
      backgroundColor: c.colors.dark.black,
    },
    active: {},
    disabled: {
      backgroundColor: c.colors.dark.gray10,
      borderColor: c.colors.dark.gray12,
    },
    focus: {
      boxShadow: `0 0 0 ${c.rem(0.4)} ${c.colors.dark.brand00Light}`,
      outline: 'none',
    },
  };
}
