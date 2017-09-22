import { Context } from '../../context';
import { ThemeStyle } from '../../theme-config';
import { RadiobuttonStyles } from '../radiobutton-styles';
import { Dark } from './dark';
import { HighContrast } from './high-contrast';
import { Light } from './light';

export function unselected(context: Context): RadiobuttonStyles {
  return context.style({
    [ThemeStyle.Light]: Light(context),
    [ThemeStyle.Dark]: Dark(context),
    [ThemeStyle.HighContrast]: HighContrast(context),
  });
}
