import { CSSProperties } from 'typestyle/lib/types';

export interface TextAreaColors {
  background: string;
  underline: string;
  label: string;
}

export interface TextAreaStyles {
  container: CSSProperties;
  normal: CSSProperties;
  underline: CSSProperties;
  focusUnderline: CSSProperties;
  label: CSSProperties;
}
