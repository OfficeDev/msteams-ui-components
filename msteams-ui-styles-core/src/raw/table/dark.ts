import { Context } from '../context';
import { base } from './base';
import { TableStyles } from './table-styles';

export function dark(c: Context): TableStyles {
  return base(c, {
    tableBg: c.colors.dark.black,
    th: c.colors.dark.white,
    td: c.colors.dark.white,
    thBg: c.colors.black,
    trBorder: c.colors.dark.brand00,
  });
}
