import { Context } from '../context';
import { Dark } from './dark';
import { HighContrast } from './high-contrast';
import { Light } from './light';
import { ToggleStyles } from './toggle-styles';

export function toggle(c: Context): ToggleStyles {
  return c.style({
    light: Light(c),
    dark: Dark(c),
    highContrast: HighContrast(c),
  });
}
