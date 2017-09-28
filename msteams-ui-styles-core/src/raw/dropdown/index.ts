import { Context } from '../context';
import { dark } from './dark';
import { DropdownStyles } from './dropdown-styles';
import { highContrast } from './high-contrast';
import { light } from './light';

export function dropdown(c: Context): DropdownStyles {
  return c.style({
    light: light(c),
    dark: dark(c),
    highContrast: highContrast(c),
  });
}
