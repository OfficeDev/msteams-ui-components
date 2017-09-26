import { Context } from '../../context';
import { CheckboxStyles } from './../checkbox-styles';
import { Dark } from './dark';
import { HighContrast } from './high-contrast';
import { Light } from './light';

export function checked(context: Context): CheckboxStyles {
  return context.style({
    light: Light(context),
    dark: Dark(context),
    highContrast: HighContrast(context),
  });
}
