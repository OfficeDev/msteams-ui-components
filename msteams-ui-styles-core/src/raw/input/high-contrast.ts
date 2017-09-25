import { Context } from '../context';
import { base } from './base';
import { InputStyles } from './input-styles';

export function highContrast(c: Context): InputStyles {
  return base(c);
}
