import { Context } from '../../context';
import { RadiobuttonStyles } from '../radiobutton-styles';

export function Light(c: Context): RadiobuttonStyles {
  return {
    normal: {
      borderColor: c.colors.transparent,
      backgroundColor: c.colors.light.brand00,
    },
    hover: {
      borderColor: c.colors.transparent,
      backgroundColor: c.colors.light.brand00,
    },
    active: {},
    disabled: {},
    focus: {},
  };
}
