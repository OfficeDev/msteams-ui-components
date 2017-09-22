import { Context } from '../context';
import { AnchorStyles } from './anchor-styles';

export function HighContrast(c: Context): AnchorStyles {
  return {
    normal: {
      textDecoration: 'none',
      color: c.colors.highContrast.yellow,
    },
    hover: {
      textDecoration: 'underline',
    },
    down: {
      textDecoration: 'underline',
    },
    disabled: {
      textDecoration: 'none',
    },
    focus: {
      textDecoration: 'underline',
    },
    visited: {
      textDecoration: 'none',
    },
  };
}
