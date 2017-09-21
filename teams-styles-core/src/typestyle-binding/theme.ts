import { Colors, getDefaultThemeColors } from '../raw/colors';
import { getContext } from '../raw/context';
import { ThemeConfig } from '../raw/theme-config';
import { primaryButton, secondaryButton } from './buttons';
import { checked, label as checkboxLabel, unchecked } from './checkboxes';
import { panel } from './panels';
import { toggles } from './toggles';

export interface Theme {
  panel: string;
  buttons: {
    primary: string;
    secondary: string;
  };
  toggles: {
    label: string;
    input: string;
    slider: string;
    sliderChecked: string;
  };
  checkbox: {
    checked: string;
    unchecked: string;
    label: string;
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
    toggles: {
      label: toggles.label(context),
      input: toggles.input(context),
      slider: toggles.slider(context),
      sliderChecked: toggles.sliderChecked(context),
    },
    checkbox: {
      checked: checked(context),
      unchecked: unchecked(context),
      label: checkboxLabel(context),
    },
  };
}
