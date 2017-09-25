import { Context } from '../context';
import { ThemeStyle } from '../theme-config';
import { AnchorStyles } from './anchor-styles';
import { Dark } from './dark';
import { HighContrast } from './high-contrast';
import { Light } from './light';

export function anchor(context: Context): AnchorStyles {
  return context.style({
    [ThemeStyle.Light]: Light(context),
    [ThemeStyle.Dark]: Dark(context),
    [ThemeStyle.HighContrast]: HighContrast(context),
  });
}
