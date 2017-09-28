import { Context } from '../context';
import { base } from './base';
import { SurfaceStyles } from './surface-styles';

export function Light(c: Context): SurfaceStyles {
  return base(c, {
    background: c.colors.gray,
    font: c.colors.light.black,
  });
}
