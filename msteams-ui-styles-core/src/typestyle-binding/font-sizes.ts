import { style } from 'typestyle';
import { Context } from './context';

export function fontSizes(context: Context) {
  const { rem } = context;
  return {
    title: style({
      fontSize: rem(2.4),
    }),
    title2: style({
      fontSize: rem(1.8),
    }),
    base: style({
      fontSize: rem(1.4),
    }),
    caption: style({
      fontSize: rem(1.2),
    }),
    xsmall: style({
      fontSize: rem(1.0),
    }),
  };
}
