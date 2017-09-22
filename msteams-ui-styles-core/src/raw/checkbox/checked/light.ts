import { Context } from '../../context';
import { CheckboxStyles } from '../checkbox-styles';

export function Light(c: Context): CheckboxStyles {
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
    before: {
      content: '"✓"',
      color: c.colors.light.white,
      position: 'absolute',
      fontSize: c.rem(1.8),
      top: `-${c.rem(0.1)}`,
      left: c.rem(0.1),
    },
  };
}
