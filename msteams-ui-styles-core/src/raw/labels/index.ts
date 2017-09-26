import { Context } from '../context';
import { Dark } from './dark';
import { HighContrast } from './high-contrast';
import { LabelStyles } from './label-styles';
import { Light } from './light';

export function label(context: Context): LabelStyles {
  return context.style({
    light: Light(context),
    dark: Dark(context),
    highContrast: HighContrast(context),
  });
}
