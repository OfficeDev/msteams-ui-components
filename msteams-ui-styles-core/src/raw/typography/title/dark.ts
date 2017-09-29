import { Context } from '../../context';
import { base } from './base';
import { TitleStyles } from './title-styles';

export function Dark(c: Context): TitleStyles {
  return base(c, {
    text: c.colors.dark.white,
  });
}
