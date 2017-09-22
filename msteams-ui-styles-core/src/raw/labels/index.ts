import { Context } from '../context';
import { ThemeStyle } from '../theme-config';
import { Dark } from './dark';
import { HighContrast } from './high-contrast';
import { LabelStyles } from './label-styles';
import { Light } from './light';

export function label(context: Context): LabelStyles {
  return context.style({
    [ThemeStyle.Light]: Light(context),
    [ThemeStyle.Dark]: Dark(context),
    [ThemeStyle.HighContrast]: HighContrast(context),
  });
}
