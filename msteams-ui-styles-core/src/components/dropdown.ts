import { baseStyle, iconTypes, iconWeights } from 'msteams-ui-icons-core';
import { classes, style } from 'typestyle';
import { Context } from '../context';
import { fontSizes } from './font-sizes';
import { fontWeights } from './font-weights';

interface DropdownColors {
  mainButton: string;
  mainButtonBg: string;
  itemContainerBg: string;
  itemBg: string;
  item: string;
  itemHoverBg: string;
  itemHover: string;
  label: string;
}

function base(c: Context, colors: DropdownColors) {
  baseStyle(iconWeights.light);
  const { rem } = c;
  const sizes = fontSizes(c);
  const weights = fontWeights(c);

  const containerClass = style({
    position: 'relative',
    display: 'block',
    $nest: {
      '&:after': {
        fontFamily: 'MSTeamsIcons-Light',
        content: iconTypes.downCaret,
        position: 'absolute',
        bottom: rem(0.9),
        right: rem(0.4),
      },
    },
  });
  const itemContainerClass = style({
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
  });

  return {
    container: containerClass,
    label: classes(style({
      padding: 0,
      margin: 0,
      border: 0,
      color: colors.label,
    }), sizes.caption, weights.regular),
    mainButton: style({
      height: rem(3.2),
      color: colors.mainButton,
      backgroundColor: colors.mainButtonBg,
      border: 0,
      padding: `${rem(0.4)} ${rem(1)} ${rem(0.4)} ${rem(1)}`,
      whiteSpace: 'nowrap',
      fontSize: rem(1.4),
      cursor: 'pointer',
      borderRadius: rem(0.3),
      width: '100%',
      textAlign: 'left',
    }),
    itemContainer: itemContainerClass,
    itemContainerRight: style({
      $nest: {
        [`&.${itemContainerClass}`]: {
          right: 0,
          left: 'auto',
        },
      },
    }),
    showItems: style({
      $nest: {
        [`&.${itemContainerClass}`]: {
          minWidth: rem(10),
          transform: 'scaleY(1)',
          transition: 'transform 0.3s ease-in-out',
        },
      },
    }),
    item: style({
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
    }, {
        $nest: {
          '&:hover': {
            backgroundColor: colors.itemHoverBg,
            color: colors.itemHover,
          },
        },
      }),
  };
}

function light(c: Context) {
  return base(c, {
    mainButton: c.colors.light.black,
    mainButtonBg: c.colors.light.gray12,
    item: c.colors.light.black,
    itemBg: c.colors.light.gray12,
    itemContainerBg: c.colors.light.gray12,
    itemHover: c.colors.light.white,
    itemHoverBg: c.colors.light.brand00,
    label: c.colors.light.gray01,
  });
}

function dark(c: Context) {
  return base(c, {
    mainButton: c.colors.dark.white,
    mainButtonBg: c.colors.dark.black,
    itemBg: c.colors.dark.black,
    item: c.colors.dark.white,
    itemContainerBg: c.colors.dark.black,
    itemHover: c.colors.dark.white,
    itemHoverBg: c.colors.dark.brand00,
    label: c.colors.dark.white,
  });
}

function highContrast(c: Context) {
  return base(c, {
    mainButton: c.colors.white,
    mainButtonBg: c.colors.black,
    item: c.colors.white,
    itemBg: c.colors.black,
    itemContainerBg: c.colors.highContrast.yellow,
    itemHover: c.colors.white,
    itemHoverBg: c.colors.highContrast.green,
    label: c.colors.white,
  });
}

export function dropdown(c: Context) {
  return c.style({
    light: light(c),
    dark: dark(c),
    highContrast: highContrast(c),
  });
}
