import { Context } from '../../context';
import { ThemeStyle } from '../../theme-config';
import { CheckboxStyles } from './../checkbox-styles';
import { Dark } from './dark';
import { HighContrast } from './high-contrast';
import { Light } from './light';

export function checked(context: Context): CheckboxStyles {
  return context.style({
    [ThemeStyle.Light]: Light(context),
    [ThemeStyle.Dark]: Dark(context),
    [ThemeStyle.HighContrast]: HighContrast(context),
  });
}
