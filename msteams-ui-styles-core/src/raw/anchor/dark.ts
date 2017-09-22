import { Context } from '../context';
import { AnchorStyles } from './anchor-styles';

export function Dark(c: Context): AnchorStyles {
  return {
    normal: {
      textDecoration: 'none',
      color: c.colors.dark.brand00,
    },
    hover: {
      textDecoration: 'underline',
      color: c.colors.dark.brand00,
    },
    down: {
      textDecoration: 'underline',
      color: c.colors.dark.brand06,
    },
    disabled: {
      textDecoration: 'none',
      color: c.colors.dark.gray10,
    },
    focus: {
      textDecoration: 'underline',
      color: c.colors.dark.brand04,
    },
    visited: {
      textDecoration: 'none',
      color: c.colors.dark.brand00,
    },
  };
}
