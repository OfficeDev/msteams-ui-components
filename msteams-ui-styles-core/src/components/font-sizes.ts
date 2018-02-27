import { IContext } from '../context';

export function fontSizes(context: IContext) {
  const names = {
    title: 'font-title',
    title2: 'font-title2',
    base: 'font-base',
    caption: 'font-caption',
    xsmall: 'font-xsmall',
  };
  const { css, font } = context;
  const { sizes } = font;
  return {
    title: css(names.title, sizes.title),
    title2: css(names.title2, sizes.title2),
    base: css(names.base, sizes.base),
    caption: css(names.caption, sizes.caption),
    xsmall: css(names.xsmall, sizes.xsmall),
  };
}
