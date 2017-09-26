import { Context } from '../../context';
import { CheckboxStyles } from './../checkbox-styles';
import { Dark } from './dark';
import { HighContrast } from './high-contrast';
import { Light } from './light';

export function unchecked(context: Context): CheckboxStyles {
  return context.style({
    light: Light(context),
    dark: Dark(context),
    highContrast: HighContrast(context),
  });
}
