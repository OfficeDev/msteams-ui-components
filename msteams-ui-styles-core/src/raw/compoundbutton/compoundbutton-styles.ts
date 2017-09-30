import { CSSProperties } from 'typestyle/lib/types';

export interface CompoundButtonStyles {
  container: {
    normal: CSSProperties;
    hover: CSSProperties;
    active: CSSProperties;
    focus: CSSProperties;
    disabled: CSSProperties;
  };
  icon: {
    normal: CSSProperties;
  };
  primaryText: {
    normal: CSSProperties;
  };
  secondaryText: {
    normal: CSSProperties;
  };
}
