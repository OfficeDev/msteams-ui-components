import { Context } from '../context';
import { base } from './base';
import { TextAreaStyles } from './textarea-styles';

export function dark(c: Context): TextAreaStyles {
  return base(c, {
    background: c.colors.dark.black,
    underline: c.colors.dark.brand00,
    label: c.colors.dark.white,
  });
}
