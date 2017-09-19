export * from './constants';
import * as colors from './constants';

export interface Colors {
  primaryButton: {
    normal: string;
    normalBg: string;
    hoverBg: string;
    activeBg: string;
    disabled: string;
    disabledBg: string;
    focus: string;
    focusOutline: string;
  };
}

export function getDefaultColors(): Colors {
  return {
    primaryButton: {
      normal: colors.white,
      normalBg: colors.brand00,
      hoverBg: colors.brand04,
      activeBg: '#454b92',
      disabled: colors.gray04,
      disabledBg: colors.gray10,
      focus: colors.white,
      focusOutline: colors.white,
    },
  };
}
