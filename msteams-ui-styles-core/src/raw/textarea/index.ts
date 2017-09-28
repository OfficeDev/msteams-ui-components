import { Context } from '../context';
import { dark } from './dark';
import { highContrast } from './high-contrast';
import { light } from './light';
import { TextAreaStyles } from './textarea-styles';

export function textarea(c: Context): TextAreaStyles {
  return c.style({
    light: light(c),
    dark: dark(c),
    highContrast: highContrast(c),
  });
}
