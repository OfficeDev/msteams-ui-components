import { panel, primaryButton, secondaryButton } from '../index';
import { Colors, getDefaultThemeColors } from '../raw/colors';
import { getContext } from '../raw/context';
import { ThemeConfig } from '../raw/theme-config';

export interface Theme {
  panel: string;
  buttons: {
    primary: string;
    secondary: string;
  };
}

const defaultConfig: ThemeConfig = {
  basePx: 16,
  colors: getDefaultThemeColors(),
};

export function getTheme(config?: ThemeConfig): Theme {
  const realConfig = Object.assign({}, defaultConfig, config);
  const context = getContext(realConfig);
  return {
    panel: panel(context),
    buttons: {
      primary: primaryButton(context),
      secondary: secondaryButton(context),
    },
  };
}
