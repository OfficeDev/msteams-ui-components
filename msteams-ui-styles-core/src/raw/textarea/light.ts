import { Context } from '../context';
import { base } from './base';
import { TextAreaStyles } from './textarea-styles';

export function light(c: Context): TextAreaStyles {
  return base(c, {
    background: c.colors.light.gray10,
    underline: c.colors.light.brand00,
  });
}
