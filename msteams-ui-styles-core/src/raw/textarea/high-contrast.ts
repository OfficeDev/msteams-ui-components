import { Context } from '../context';
import { base } from './base';
import { TextAreaStyles } from './textarea-styles';

export function highContrast(c: Context): TextAreaStyles {
  const { rem } = c;
  const baseStyle = base(c, {
    background: c.colors.highContrast.black,
    underline: c.colors.highContrast.yellow,
    label: c.colors.highContrast.green,
  });
  baseStyle.normal = Object.assign(baseStyle.normal, {
    border: `${rem(0.1)} solid ${c.colors.white}`,
  });
  return baseStyle;
}
