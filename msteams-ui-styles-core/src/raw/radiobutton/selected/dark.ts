import { Context } from '../../context';
import { RadiobuttonStyles } from '../radiobutton-styles';

export function Dark(c: Context): RadiobuttonStyles {
  return {
    normal: {
      borderColor: c.colors.transparent,
      backgroundColor: c.colors.dark.brand00,
    },
    hover: {
      borderColor: c.colors.transparent,
      backgroundColor: c.colors.dark.brand00,
    },
    active: {},
    disabled: {},
    focus: {},
  };
}
