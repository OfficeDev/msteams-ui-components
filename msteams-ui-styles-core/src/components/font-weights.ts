import { style } from 'typestyle';
import { Context } from '../context';

export function fontWeights(context: Context) {
  return {
    semilight: style(context.font.weights.semilight),
    regular: style(context.font.weights.regular),
    semibold: style(context.font.weights.semibold),
    bold: style(context.font.weights.bold),
  };
}
