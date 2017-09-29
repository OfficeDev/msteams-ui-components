import { Context } from '../context';
import { SurfaceColors } from './surface-colors';
import { SurfaceStyles } from './surface-styles';

export function base(context: Context, colors: SurfaceColors): SurfaceStyles {
  return {
    normal: {
      fontFamily: '"Segoe UI","Courier New",Courier',
      fontSize: context.rem(1.4),
      color: colors.font,
      backgroundColor: colors.background,
    },
  };
}
