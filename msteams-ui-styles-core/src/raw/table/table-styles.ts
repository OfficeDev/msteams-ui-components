import { CSSProperties } from 'typestyle/lib/types';

export interface TableColors {
  tableBg: string;
  trBorder: string;
  thBg: string;
  th: string;
  td: string;
}

export interface TableStyles {
  table: CSSProperties;
  tbody: CSSProperties;
  td: CSSProperties;
  tr: CSSProperties;
  trFirst: CSSProperties;
  trLast: CSSProperties;
  thead: CSSProperties;
  th: CSSProperties;
}
