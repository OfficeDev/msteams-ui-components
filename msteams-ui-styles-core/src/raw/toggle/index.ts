import { Context } from '../context';
import { ThemeStyle } from '../theme-config';
import { dark } from './dark';
import { highContrast } from './high-contrast';
import { light } from './light';
import { ToggleStyles } from './toggle-styles';

export function toggle(c: Context): ToggleStyles {
  return c.style({
    [ThemeStyle.Light]: light(c),
    [ThemeStyle.Dark]: dark(c),
    [ThemeStyle.HighContrast]: highContrast(c),
  });
}
