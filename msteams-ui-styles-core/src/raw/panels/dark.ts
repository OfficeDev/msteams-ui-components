import { Context } from '../context';
import { base } from './base';
import { PanelStyles } from './panel-styles';

export function Dark(c: Context): PanelStyles {
  return base(c, { background: c.colors.dark.black });
}
