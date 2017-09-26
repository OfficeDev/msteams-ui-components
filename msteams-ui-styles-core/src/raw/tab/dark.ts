import { Context } from '../context';
import { base } from './base';
import { TabStyles } from './tab-styles';

export function dark(c: Context): TabStyles {
  return base(c, {
    text: c.colors.white,
    underline: c.colors.dark.brand00,
  });
}
