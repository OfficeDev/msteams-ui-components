import { CSSProperties } from 'react';
import { Context } from '../../context';
import { ButtonStyles } from '../button-styles';

export function Dark(c: Context): ButtonStyles {
  return {
    normal: {
      height: c.rem(3.2),
      minWidth: c.rem(3.2),
      background: '0',
      border: c.rem(0.2) + ' solid transparent',
      borderRadius: c.rem(0.3),
      padding: c.rem(0.4) + ' ' + c.rem(3.2),
      whiteSpace: 'nowrap',
      fontSize: c.rem(1.4),
      position: 'relative',
      cursor: 'pointer',
    },
    hover: {},
    active: {},
    disabled: {
      cursor: 'not-allowed',
    },
    focus: {
      outline: 'none',
    },
    focusAfter: {},
  };
}
