import { Context } from '../context';
import { base } from './base';
import { SurfaceStyles } from './surface-styles';

export function Dark(c: Context): SurfaceStyles {
  return base(c, {
    background: c.colors.dark.black,
    font: c.colors.dark.white,
  });
}
