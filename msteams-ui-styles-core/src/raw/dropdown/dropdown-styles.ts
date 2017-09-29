import { CSSProperties } from 'typestyle/lib/types';

export interface DropdownColors {
  mainButton: string;
  mainButtonBg: string;
  itemContainerBg: string;
  itemBg: string;
  item: string;
  itemHoverBg: string;
  itemHover: string;
}

export interface DropdownStyles {
  container: CSSProperties;
  mainButton: CSSProperties;
  mainButtonArrow: CSSProperties;
  itemContainer: CSSProperties;
  itemContainerRight: CSSProperties;
  showItems: CSSProperties;
  item: CSSProperties;
  itemHover: CSSProperties;
}
