import { Context } from '../context';
import { LabelStyles } from './label-styles';

export function Dark(c: Context): LabelStyles {
  return {
    normal: {
      color: c.colors.dark.white,
    },
  };
}
