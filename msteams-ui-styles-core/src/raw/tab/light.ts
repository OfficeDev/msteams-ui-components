import { Context } from '../context';
import { base } from './base';
import { TabStyles } from './tab-styles';

export function light(c: Context): TabStyles {
  return base(c, {
    text: c.colors.black,
    underline: c.colors.light.brand00,
    containerUnderline: c.colors.light.gray06,
  });
}
