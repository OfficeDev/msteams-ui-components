import { Context } from '../context';
import { PanelStyles } from './panel-styles';

export function Dark(c: Context): PanelStyles {
  return {
    normal: {
      backgroundColor: c.colors.dark.black,
    },
  };
}
