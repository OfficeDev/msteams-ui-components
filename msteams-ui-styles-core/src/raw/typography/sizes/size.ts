import { Context } from '../../../typestyle-binding/context';
import { SizeStyles } from './size-styles';

export function size(context: Context): SizeStyles {
  const style = {
    title: {
      fontSize: context.rem(2.4),
    },
    title2: {
      fontSize: context.rem(1.8),
    },
    base: {
      fontSize: context.rem(1.4),
    },
    caption: {
      fontSize: context.rem(1.2),
    },
    xsmall: {
      fontSize: context.rem(1.0),
    },
  };

  return context.style({
    light: style,
    dark: style,
    highContrast: style,
  });
}
