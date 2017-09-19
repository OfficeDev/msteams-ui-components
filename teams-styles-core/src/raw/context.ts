import { Colors, getDefaultColors } from './colors/index';
import { Config } from './config';

export interface Context {
  rem: (n: number) => string;
  colors: Colors;
}

const defaultConfig: Config = {
  yourBasePx: 16,
  colors: getDefaultColors(),
};

export function getContext(config?: Config): Context {
  const c = Object.assign({}, defaultConfig, config);
  return {
    rem: (n: number) => `${n * 10 / c.yourBasePx!}rem`,
    colors: c.colors!,
  };
}
