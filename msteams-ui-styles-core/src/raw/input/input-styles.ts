import { CSSProperties } from 'typestyle/lib/types';

export interface InputColors {
  background: string;
  underline: string;
  label: string;
}

export interface InputStyles {
  container: CSSProperties;
  normal: CSSProperties;
  underline: CSSProperties;
  focusUnderline: CSSProperties;
  label: CSSProperties;
}
