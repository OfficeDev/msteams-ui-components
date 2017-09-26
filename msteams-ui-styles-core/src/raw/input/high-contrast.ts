import { Context } from '../context';
import { base } from './base';
import { InputStyles } from './input-styles';

export function highContrast(c: Context): InputStyles {
  const { rem } = c;
  const baseStyle = base(c, {
    background: c.colors.highContrast.black,
    underline: c.colors.highContrast.yellow,
  });
  baseStyle.normal = Object.assign(baseStyle.normal, {
    border: `${rem(0.1)} solid ${c.colors.white}`,
  });
  return baseStyle;
}
