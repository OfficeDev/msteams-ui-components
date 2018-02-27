import { IContext } from '../context';

export function fontWeights(context: IContext) {
  const names = {
    semilight: 'font-semilight',
    regular: 'font-regular',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };
  const { css, font } = context;
  const { weights } = font;
  return {
    semilight: css(names.semilight, weights.semilight),
    regular: css(names.regular, weights.regular),
    semibold: css(names.semibold, weights.semibold),
    bold: css(names.bold, weights.bold),
  };
}
