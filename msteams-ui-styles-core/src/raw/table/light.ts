import { Context } from '../context';
import { base } from './base';
import { TableStyles } from './table-styles';

export function light(c: Context): TableStyles {
  return base(c, {
    tableBg: c.colors.light.gray12,
    th: c.colors.light.gray04,
    td: c.colors.light.black,
    thBg: c.colors.white,
    trBorder: c.colors.white,
  });
}
