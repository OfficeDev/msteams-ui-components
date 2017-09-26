import { Context } from '../context';
import { dark } from './dark';
import { highContrast } from './high-contrast';
import { light } from './light';
import { TableStyles } from './table-styles';

export function table(c: Context): TableStyles {
  return c.style({
    light: light(c),
    dark: dark(c),
    highContrast: highContrast(c),
  });
}
