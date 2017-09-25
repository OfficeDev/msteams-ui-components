import { Context } from '../../context';
import { CheckboxStyles } from '../checkbox-styles';

export function HighContrast(c: Context): CheckboxStyles {
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
      outline: `${c.rem(0.4)} solid ${c.colors.highContrast.yellow}`,
    },
    before: {},
  };
}
