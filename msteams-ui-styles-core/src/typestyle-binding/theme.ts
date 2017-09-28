import { Colors } from '../raw/colors';
import { getContext } from '../raw/context';
import { ThemeConfig, ThemeStyle } from '../raw/theme-config';
import anchor from './anchor';
import button from './buttons';
import checkbox from './checkbox';
import dropdown from './dropdown';
import input from './input';
import panel from './panel';
import radiobutton from './radiobutton';
import surface from './surface';
import tab from './tab';
import table from './table';
import textarea from './textarea';
import title from './title';
import toggle from './toggle';

export interface Theme {
  panel: string;
  surface: string;
  typography: {
    title: string;
  };
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
  tab: {
    container: string;
    normal: string;
    active: string;
  };
  table: {
    table: string;
    tbody: string;
    tr: string;
    td: string;
    thead: string;
    th: string;
  };
  textarea: {
    textarea: string;
    underline: string;
    container: string;
  };
  dropdown: {
    container: string;
    mainButton: string;
    item: string;
    itemContainer: string;
    itemContainerRight: string;
    showItems: string;
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
  const tabClasses = tab(context);
  const tableClasses = table(context);
  const textareaClasses = textarea(context);
  const dropdownClasses = dropdown(context);

  return {
    panel: panel(context),
    surface: surface(context),
    typography: {
      title: title(context),
    },
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
    tab: {
      container: tabClasses.container,
      normal: tabClasses.normal,
      active: tabClasses.active,
    },
    table: {
      table: tableClasses.table,
      tr: tableClasses.tr,
      td: tableClasses.td,
      tbody: tableClasses.tbody,
      thead: tableClasses.thead,
      th: tableClasses.th,
    },
    textarea: {
      textarea: textareaClasses.textarea,
      container: textareaClasses.container,
      underline: textareaClasses.underline,
    },
    dropdown: {
      container: dropdownClasses.container,
      mainButton: dropdownClasses.mainButton,
      item: dropdownClasses.item,
      itemContainerRight: dropdownClasses.itemContainerRight,
      showItems: dropdownClasses.showItems,
      itemContainer: dropdownClasses.itemContainer,
    },
  };
}
