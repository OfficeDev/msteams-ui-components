import { Context } from '../context';
import { AnchorStyles } from './anchor-styles';

export function Light(c: Context): AnchorStyles {
  return {
    normal: {
      textDecoration: 'none',
      color: c.colors.light.brand00,
    },
    hover: {
      textDecoration: 'underline',
      color: c.colors.light.brand00,
    },
    down: {
      textDecoration: 'underline',
      color: c.colors.light.brand06,
    },
    disabled: {
      textDecoration: 'none',
      color: c.colors.light.gray10,
    },
    focus: {
      textDecoration: 'underline',
      color: c.colors.light.brand04,
    },
    visited: {
      textDecoration: 'none',
      color: c.colors.light.brand00,
    },
  };
}
