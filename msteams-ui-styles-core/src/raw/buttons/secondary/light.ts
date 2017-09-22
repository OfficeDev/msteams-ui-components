import { CSSProperties } from 'react';
import { Context } from '../../context';
import { baseButton } from '../base';
import { ButtonStyles } from '../button-styles';

export function Light(c: Context): ButtonStyles {
  const base = baseButton(c);
  return {
    normal: {
      ...base.normal,
      borderColor: c.colors.light.gray06,
      color: c.colors.light.black,
    },
    hover: {
      ...base.hover,
      backgroundColor: c.colors.light.gray06,
      borderColor: c.colors.transparent,
    },
    active: {
      ...base.active,
      backgroundColor: c.colors.light.gray04,
    },
    disabled: {
      ...base.disabled,
      backgroundColor: c.colors.transparent,
      color: c.colors.light.gray04,
      borderColor: c.colors.light.gray12,
    },
    focus: {
      ...base.focus,
      backgroundColor: c.colors.light.gray06,
      borderColor: c.colors.transparent,
    },
    focusAfter: {
      ...base.focusAfter,
      content: "''",
      position: 'absolute',
      top: '1px',
      bottom: '1px',
      left: '1px',
      right: '1px',
      border: `${c.rem(0.2)} solid ${c.colors.black}`,
    },
  };
}
