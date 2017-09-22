import { Context } from '../../context';
import { baseButton } from '../base';
import { ButtonStyles } from '../button-styles';

export function Light(c: Context): ButtonStyles {
  const base = baseButton(c);
  return {
    normal: {
      ...base.normal,
      backgroundColor: c.colors.light.brand00,
      color: c.colors.light.white,
    },
    hover: {
      ...base.hover,
      backgroundColor: c.colors.light.brand04,
    },
    active: {
      ...base.active,
      backgroundColor: c.colors.light.brand06,
    },
    disabled: {
      ...base.disabled,
      backgroundColor: c.colors.light.gray10,
      color: c.colors.light.gray04,
    },
    focus: base.focus,
    focusAfter: {
      ...base.focusAfter,
      content: "''",
      position: 'absolute',
      top: '1px',
      bottom: '1px',
      left: '1px',
      right: '1px',
      border: `${c.rem(0.2)} solid ${c.colors.white}`,
    },
  };
}
