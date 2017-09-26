import { Context } from '../context';
import { dark } from './dark';
import { highContrast } from './high-contrast';
import { InputStyles } from './input-styles';
import { light } from './light';

export function input(c: Context): InputStyles {
  return c.style({
    light: light(c),
    dark: dark(c),
    highContrast: highContrast(c),
  });
}
