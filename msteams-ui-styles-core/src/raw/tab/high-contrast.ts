import { Context } from '../context';
import { base } from './base';
import { TabStyles } from './tab-styles';

export function highContrast(c: Context): TabStyles {
  return base(c, {
    text: c.colors.white,
    underline: c.colors.highContrast.yellow,
    containerUnderline: c.colors.highContrast.green,
  });
}
