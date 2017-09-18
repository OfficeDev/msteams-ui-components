export interface Config {
  rem: (n: number) => string;
}

export function getConfig(yourBasePx: number = 16): Config {
  return {
    rem(n: number) {
      return `${n * yourBasePx / 16}rem`;
    },
  };
}
