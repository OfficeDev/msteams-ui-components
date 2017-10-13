import { style } from 'typestyle';
import { Context } from '../context';

export function fontSizes(context: Context) {
  return {
    title: style(context.font.sizes.title),
    title2: style(context.font.sizes.title2),
    base: style(context.font.sizes.base),
    caption: style(context.font.sizes.caption),
    xsmall: style(context.font.sizes.xsmall),
  };
}
