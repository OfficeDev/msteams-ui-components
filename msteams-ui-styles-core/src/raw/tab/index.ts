import { Context } from '../context';
import { dark } from './dark';
import { highContrast } from './high-contrast';
import { light } from './light';
import { TabStyles } from './tab-styles';

export function tab(c: Context): TabStyles {
  return c.style({
    light: light(c),
    dark: dark(c),
    highContrast: highContrast(c),
  });
}
