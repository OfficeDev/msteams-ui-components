import { Context } from '../../context';
import { base } from './base';
import { TitleStyles } from './title-styles';

export function Light(c: Context): TitleStyles {
  return base(c, {
    text: c.colors.light.black,
  });
}
