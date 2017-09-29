import { Context } from '../context';
import { font } from '../fonts/font';
import { SurfaceColors } from './surface-colors';
import { SurfaceStyles } from './surface-styles';

export function base(context: Context, colors: SurfaceColors): SurfaceStyles {
  const baseFontStyle = font(context).regular;
  return {
    normal: {
      ...baseFontStyle,
      fontSize: context.rem(1.4),
      color: colors.font,
      backgroundColor: colors.background,
    },
  };
}
