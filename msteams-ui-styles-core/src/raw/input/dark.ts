import { Context } from '../context';
import { base } from './base';
import { InputStyles } from './input-styles';

export function dark(c: Context): InputStyles {
  return base(c, {
    background: c.colors.dark.black,
    underline: c.colors.dark.brand00,
    label: c.colors.dark.white,
  });
}
