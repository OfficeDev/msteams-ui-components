import { Colors } from './colors/index';

// import { Colors, getDefaultColors } from '../colors/index';

export interface Config {
  // rem: (n: number) => string;
  yourBasePx?: number;
  colors?: Colors;
}

// export function getConfig(yourBasePx: number = 16): Config {
//   return {
//     rem(n: number) {
//       return `${n * 10 / yourBasePx}rem`;
//     },
//     colors: getDefaultColors(),
//   };
}
