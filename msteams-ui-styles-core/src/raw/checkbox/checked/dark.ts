import { CSSProperties } from 'react';
import { Context } from '../../context';
import { CheckboxStyles } from '../checkbox-styles';

export function Dark(c: Context): CheckboxStyles {
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
    before: {
      content: '"✓"',
      color: c.colors.dark.black,
      position: 'absolute',
      fontSize: c.rem(1.8),
      top: `-${c.rem(0.1)}`,
      left: c.rem(0.1),
    },
  };
}
