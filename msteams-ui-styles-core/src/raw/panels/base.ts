import { Context } from '../context';
import { PanelColors } from './panel-colors';
import { PanelStyles } from './panel-styles';

export function base(context: Context, colors: PanelColors): PanelStyles {
  return {
    normal: {
      backgroundColor: colors.background,
      borderRadius: context.rem(0.3),
      padding: context.rem(3.2),
    },
  };
}
