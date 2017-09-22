import { Context } from '../context';
import { LabelStyles } from './label-styles';

export function Light(c: Context): LabelStyles {
  return {
    normal: {
      color: c.colors.light.black,
    },
  };
}
