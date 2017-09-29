import { Context } from '../context';
import { Dark } from './dark';
import { HighContrast } from './high-contrast';
import { Light } from './light';
import { SurfaceStyles } from './surface-styles';

export function surface(context: Context): SurfaceStyles {
  return context.style({
    light: Light(context),
    dark: Dark(context),
    highContrast: HighContrast(context),
  });
}
