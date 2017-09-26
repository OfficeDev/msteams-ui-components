import { Context } from '../context';
import { AnchorStyles } from './anchor-styles';
import { Dark } from './dark';
import { HighContrast } from './high-contrast';
import { Light } from './light';

export function anchor(context: Context): AnchorStyles {
  return context.style({
    light: Light(context),
    dark: Dark(context),
    highContrast: HighContrast(context),
  });
}
