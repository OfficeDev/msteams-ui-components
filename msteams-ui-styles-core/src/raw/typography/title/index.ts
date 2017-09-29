import { Context } from '../../context';
import { Dark } from './dark';
import { HighContrast } from './high-contrast';
import { Light } from './light';
import { TitleStyles } from './title-styles';

export function title(c: Context): TitleStyles {
  return c.style({
    light: Light(c),
    dark: Dark(c),
    highContrast: HighContrast(c),
  });
}
