import { Context } from '../context';
import { DropdownColors, DropdownStyles } from './dropdown-styles';

export function base(c: Context, colors: DropdownColors): DropdownStyles {
  const { rem } = c;
  return {
    container: {
      position: 'relative',
      display: 'inline-block',
    },
    mainButton: {
      height: rem(3.2),
      color: colors.mainButton,
      backgroundColor: colors.mainButtonBg,
      border: 0,
      padding: `${rem(0.4)} ${rem(1)} ${rem(0.4)} ${rem(1)}`,
      whiteSpace: 'nowrap',
      fontSize: rem(1.4),
      cursor: 'pointer',
      borderRadius: rem(0.3),
    },
    mainButtonArrow: {
      content: '"▼"',
      marginLeft: rem(0.5),
    },
    itemContainer: {
      backgroundColor: colors.itemContainerBg,
      position: 'absolute',
      left: 0,
      top: '100%',
      zIndex: 1000,
      transform: 'scaleY(0)',
      transformOrigin: 'top',
      borderRadius: rem(0.3),
      display: 'inline-block',
      overflow: 'hidden',
      marginTop: rem(0.3),
    },
    itemContainerRight: {
      right: 0,
      left: 'auto',
    },
    showItems: {
      minWidth: rem(10),
      transform: 'scaleY(1)',
      transition: 'transform 0.3s ease-in-out',
    },
    item: {
      width: '100%',
      position: 'relative',
      height: rem(3.2),
      border: 0,
      padding: `${rem(0.4)} ${rem(1)}`,
      textAlign: 'left',
      whiteSpace: 'nowrap',
      display: 'block',
      backgroundColor: colors.itemBg,
      color: colors.item,
      outline: 'none',
    },
    itemHover: {
      backgroundColor: colors.itemHoverBg,
      color: colors.itemHover,
    },
  };
}
