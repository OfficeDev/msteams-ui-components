import { Context } from '../../context';
import { ThemeStyle } from '../../theme-config';
import { ButtonStyles } from '../button-styles';
import { Dark } from './dark';
import { HighContrast } from './high-contrast';
import { Light } from './light';

export function secondary(context: Context): ButtonStyles {
  return context.style({
    [ThemeStyle.Light]: Light(context),
    [ThemeStyle.Dark]: Dark(context),
    [ThemeStyle.HighContrast]: HighContrast(context),
  });
}
