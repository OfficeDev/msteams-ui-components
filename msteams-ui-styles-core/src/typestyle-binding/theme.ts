import { Colors } from '../raw/colors';
import { getContext } from '../raw/context';
import { ThemeConfig, ThemeStyle } from '../raw/theme-config';
import anchor from './anchor';
import button from './buttons';
import checkbox from './checkbox';
import { input } from './input';
import panel from './panel';
import radiobutton from './radiobutton';
import { toggle } from './toggle';

export interface Theme {
  panel: string;
  buttons: {
    primary: string;
    secondary: string;
  };
  toggle: {
    container: string;
    input: string;
    slider: string;
  };
  checkbox: {
    checked: string;
    unchecked: string;
    label: string;
  };
  anchor: string;
  radiobutton: {
    selected: string;
    unselected: string;
    label: string;
  };
  input: {
    container: string;
    underline: string;
    input: string;
  };
}

const defaultConfig: ThemeConfig = {
  baseFontSize: 16,
  style: ThemeStyle.Dark,
  colors: Colors,
};

export function getTheme(config?: ThemeConfig): Theme {
  const realConfig = Object.assign({}, defaultConfig, config);
  const context = getContext(realConfig);
  const inputClasses = input(context);
  const toggleClasses = toggle(context);
  return {
    panel: panel(context),
    buttons: {
      primary: button.primary(context),
      secondary: button.secondary(context),
    },
    toggle: {
      container: toggleClasses.container,
      input: toggleClasses.input,
      slider: toggleClasses.slider,
    },
    checkbox: {
      checked: checkbox.checked(context),
      unchecked: checkbox.unchecked(context),
      label: checkbox.label(context),
    },
    radiobutton: {
      selected: radiobutton.selected(context),
      unselected: radiobutton.unselected(context),
      label: radiobutton.label(context),
    },
    anchor: anchor(context),
    input: {
      input: inputClasses.input,
      container: inputClasses.container,
      underline: inputClasses.underline,
    },
  };
}
