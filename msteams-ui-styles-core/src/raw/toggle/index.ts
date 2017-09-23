import { Context } from '../context';
import { ThemeStyle } from '../theme-config';
import { Dark } from './dark';
import { HighContrast } from './high-contrast';
import { Light } from './light';
import { ToggleStyles } from './toggle-styles';

export function toggle(c: Context): ToggleStyles {
  return c.style({
    [ThemeStyle.Light]: Light(c),
    [ThemeStyle.Dark]: Dark(c),
    [ThemeStyle.HighContrast]: HighContrast(c),
  });
}
