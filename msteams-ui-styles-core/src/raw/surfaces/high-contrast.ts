import { Context } from '../context';
import { base } from './base';
import { SurfaceStyles } from './surface-styles';

export function HighContrast(c: Context): SurfaceStyles {
  return base(c, {
    background: c.colors.black,
    font: c.colors.white,
  });
}
