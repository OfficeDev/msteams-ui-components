import { CSSProperties } from 'typestyle/lib/types';

export interface TabColors {
  text: string;
  underline: string;
  containerUnderline: string;
}

export interface TabStyles {
  container: CSSProperties;
  normal: CSSProperties;
  active: CSSProperties;
}
