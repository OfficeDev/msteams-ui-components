import { Context } from '../../context';
import { CheckboxStyles } from '../checkbox-styles';

export function Light(c: Context): CheckboxStyles {
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
      outline: `${c.rem(0.4)} solid ${c.colors.light.brand00Dark}`,
    },
    before: {},
  };
}
