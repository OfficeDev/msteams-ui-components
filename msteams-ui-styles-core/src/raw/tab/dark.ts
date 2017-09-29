import { Context } from '../context';
import { base } from './base';
import { TabStyles } from './tab-styles';

export function dark(c: Context): TabStyles {
  return base(c, {
    text: c.colors.white,
    textActive: c.colors.dark.brand00,
    underline: c.colors.dark.brand00,
    containerUnderline: c.colors.dark.white,
  });
}
