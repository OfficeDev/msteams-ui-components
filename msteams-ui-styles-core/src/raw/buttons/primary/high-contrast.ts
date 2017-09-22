import { CSSProperties } from 'react';
import { Context } from '../../context';
import { baseButton } from '../base';
import { ButtonStyles } from '../button-styles';

export function HighContrast(c: Context): ButtonStyles {
  const base = baseButton(c);
  return {
    normal: {
      ...base.normal,
      backgroundColor: c.colors.highContrast.black,
      borderColor: c.colors.white,
      color: c.colors.white,
    },
    hover: {
      ...base.hover,
      backgroundColor: c.colors.highContrast.yellow,
      color: c.colors.black,
    },
    active: {
      ...base.active,
      backgroundColor: c.colors.highContrast.yellow,
      color: c.colors.black,
    },
    disabled: {
      ...base.disabled,
      backgroundColor: c.colors.highContrast.green,
      color: c.colors.black,
    },
    focus: {
      ...base.focus,
      backgroundColor: c.colors.highContrast.yellow,
      color: c.colors.black,
    },
    focusAfter: base.focusAfter,
  };
}
