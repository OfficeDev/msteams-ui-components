import { Context } from '../context';
import { base } from './base';
import { TableStyles } from './table-styles';

export function highContrast(c: Context): TableStyles {
  return base(c, {
    tableBg: c.colors.highContrast.black,
    th: c.colors.highContrast.green,
    td: c.colors.white,
    thBg: c.colors.highContrast.black,
    trBorder: c.colors.highContrast.yellow,
  });
}
