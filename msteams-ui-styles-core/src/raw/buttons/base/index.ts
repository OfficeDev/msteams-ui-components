import { Context } from '../../context';
import { ButtonStyles } from '../button-styles';
import { Dark } from './dark';
import { HighContrast } from './high-contrast';
import { Light } from './light';

export function baseButton(context: Context): ButtonStyles {
  return context.style({
    light: Light(context),
    dark: Dark(context),
    highContrast: HighContrast(context),
  });
}
