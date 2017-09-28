import { Context } from '../context';
import { TitleStyles } from './title-styles';

export function title(context: Context): TitleStyles {
  const style = {
    normal: {
      fontWeight: 600,
      fontSize: context.rem(2.4),
      height: context.rem(3.2),
    },
  };

  return context.style({
    light: style,
    dark: style,
    highContrast: style,
  });
}
