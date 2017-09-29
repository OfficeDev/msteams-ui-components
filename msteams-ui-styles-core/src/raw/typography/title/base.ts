import { Context } from '../../context';
import { font } from '../../fonts/font';
import { TitleColors } from './title-colors';
import { TitleStyles } from './title-styles';

export function base(context: Context, colors: TitleColors): TitleStyles {
  const baseFontStyle = font(context).semibold;
  return {
    normal: {
      ...baseFontStyle,
      fontSize: context.rem(2.4),
      color: colors.text,
    },
  };
}
