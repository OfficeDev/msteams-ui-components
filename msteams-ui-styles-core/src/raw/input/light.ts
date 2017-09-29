import { Context } from '../context';
import { base } from './base';
import { InputStyles } from './input-styles';

export function light(c: Context): InputStyles {
  return base(c, {
    background: c.colors.light.gray10,
    underline: c.colors.light.brand00,
    label: c.colors.light.gray01,
  });
}
