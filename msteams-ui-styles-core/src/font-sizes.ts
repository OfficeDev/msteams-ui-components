import { IRemFunction } from './context';
import { IFontSizePalette } from './font-size-palette';

export function FontSizes(rem: IRemFunction): IFontSizePalette {
  return {
    title: {
      fontSize: rem(2.4),
      lineHeight: rem(3.2),
    },
    title2: {
      fontSize: rem(1.8),
      lineHeight: rem(2.4),
    },
    base: {
      fontSize: rem(1.4),
      lineHeight: rem(2.0),
    },
    caption: {
      fontSize: rem(1.2),
      lineHeight: rem(1.6),
    },
    xsmall: {
      fontSize: rem(1.0),
      lineHeight: rem(1.1),
    },
  };
}
