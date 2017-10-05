import { RemFunction } from './context';
import { FontSizePalate } from './font-size-palate';

export function FontSizes(rem: RemFunction): FontSizePalate {
  return {
    title: {
      fontSize: rem(2.4),
    },
    title2: {
      fontSize: rem(1.8),
    },
    base: {
      fontSize: rem(1.4),
    },
    caption: {
      fontSize: rem(1.2),
    },
    xsmall: {
      fontSize: rem(1.0),
    },
  };
}
