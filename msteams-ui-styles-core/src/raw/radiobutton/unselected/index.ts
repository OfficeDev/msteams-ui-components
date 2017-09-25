import { Context } from '../../context';
import { RadiobuttonStyles } from '../radiobutton-styles';
import { Dark } from './dark';
import { HighContrast } from './high-contrast';
import { Light } from './light';

export function unselected(context: Context): RadiobuttonStyles {
  return context.style({
    light: Light(context),
    dark: Dark(context),
    highContrast: HighContrast(context),
  });
}
