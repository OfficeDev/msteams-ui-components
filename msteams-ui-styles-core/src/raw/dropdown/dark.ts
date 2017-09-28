import { Context } from '../context';
import { base } from './base';
import { DropdownStyles } from './dropdown-styles';

export function dark(c: Context): DropdownStyles {
  return base(c, {
    mainButton: c.colors.dark.white,
    mainButtonBg: c.colors.dark.black,
    itemBg: c.colors.dark.black,
    item: c.colors.dark.white,
    itemContainerBg: c.colors.dark.black,
    itemHover: c.colors.dark.white,
    itemHoverBg: c.colors.dark.brand00,
  });
}
