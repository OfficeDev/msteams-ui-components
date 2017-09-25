import { Context } from '../context';
import { ThemeStyle } from '../theme-config';
import { Dark } from './dark';
import { HighContrast } from './high-contrast';
import { Light } from './light';
import { PanelStyles } from './panel-styles';

export function panel(context: Context): PanelStyles {
  return context.style({
    [ThemeStyle.Light]: Light(context),
    [ThemeStyle.Dark]: Dark(context),
    [ThemeStyle.HighContrast]: HighContrast(context),
  });
}
