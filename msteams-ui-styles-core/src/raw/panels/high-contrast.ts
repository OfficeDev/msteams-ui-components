import { Context } from '../context';
import { base } from './base';
import { PanelStyles } from './panel-styles';

export function HighContrast(c: Context): PanelStyles {
  return base(c, { background: c.colors.black });
}
