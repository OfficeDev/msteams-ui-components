import { Context } from '../context';
import { Dark } from './dark';
import { HighContrast } from './high-contrast';
import { Light } from './light';
import { PanelStyles } from './panel-styles';

export function panel(context: Context): PanelStyles {
  return context.style({
    light: Light(context),
    dark: Dark(context),
    highContrast: HighContrast(context),
  });
}
