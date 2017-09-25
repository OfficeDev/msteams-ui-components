import { Context } from '../../context';
import { RadiobuttonStyles } from '../radiobutton-styles';

export function Light(c: Context): RadiobuttonStyles {
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
      borderColor: c.colors.light.gray03,
      backgroundColor: c.colors.light.white,
    },
    hover: {
      backgroundColor: c.colors.light.white,
    },
    active: {},
    disabled: {
      backgroundColor: c.colors.light.gray10,
      borderColor: c.colors.light.gray12,
    },
    focus: {
      boxShadow: `0 0 0 ${c.rem(0.4)} ${c.colors.light.brand00Dark}`,
      outline: 'none',
    },
  };
}
