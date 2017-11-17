import { chooseStyle, Context } from '../context';

interface DropdownColors {
  mainButton: {
    text: string;
    background: string;
    icon: string;
    border: string;
  };
  itemContainerBg: string;
  itemBg: string;
  item: string;
  itemHoverBg: string;
  itemHover: string;
  label: string;
  underline: string;
  bgShadow:string;
  border:string;
}

function base(context: Context, colors: DropdownColors) {
  const names = {
    container: '',
    label: '',
    button: {
      container: '',
      text: '',
      icon: '',
    },
    item: {
      container: '',
      caret: '',
      showItems: '',
      content: '',
    },
  };

  const { css, font, rem } = context;
  const { sizes } = font;

  const itemContainerClass = css(names.item.container, {
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
    boxShadow:colors.bgShadow,
    marginLeft:rem(0.1),
    border: colors.border,
  });

  return {
    container: css(names.container, {
      position: 'relative',
      display: 'inline-block',
      minWidth: rem(2.2),
    }),
    label: css(names.label,
      sizes.caption, {
      display: 'inline-block',
      padding: 0,
      border: 0,
      marginBottom: rem(0.8),
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
      color: colors.label,
    }),
    mainButton: {
      container: css(names.button.container, {
        height: rem(3.2),
        display: 'inline-flex',
        alignItems: 'center',
        color: colors.mainButton.text,
        backgroundColor: colors.mainButton.background,
        border: `${rem(0.1)} solid`,
        borderColor: colors.mainButton.border,
        paddingLeft: rem(0.6),
        paddingRight: rem(0.6),
        paddingBottom: 0,
        paddingTop: 0,
        fontFamily: 'inherit',
        whiteSpace: 'nowrap',
        fontSize: rem(1.4),
        cursor: 'pointer',
        borderRadius: rem(0.3),
        width: '100%',
        textAlign: 'left',
        outline: 'none',
        $nest: {
          '&:focus': {
            borderBottomWidth: rem(0.2),
            borderBottomColor: colors.underline,
          },
        },
      }),
      text: css(names.button.text, {
        flex: '1 1 auto',
        paddingLeft: rem(0.4),
        paddingRight: rem(0.8),
      }),
      icon: css(names.button.icon, {
        flex: '0 0 auto',
        color: colors.mainButton.icon,
      }),
    },
    itemContainer: itemContainerClass,
    itemContainerRight: css(names.item.caret, {
      $nest: {
        [`&.${itemContainerClass}`]: {
          right: 0,
          left: 'auto',
        },
      },
    }),
    showItems: css(names.item.showItems, {
      $nest: {
        [`&.${itemContainerClass}`]: {
          minWidth: `calc(100% - ${rem(0.19)})`,
          transform: 'scaleY(1)',
        },
      },
    }),
    item: css(names.item.content, {
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
      cursor: 'pointer',
      outline: 'none',
      $nest: {
        '&:focus': {
          backgroundColor: colors.itemHoverBg,
          color: colors.itemHover,
        },
        '&:hover': {
          backgroundColor: colors.itemHoverBg,
          color: colors.itemHover,
        },
      },
    }),
  };
}

function light(context: Context) {
  const { colors } = context;
  return base(context, {
    mainButton: {
      text: colors.light.black,
      icon: colors.light.gray02,
      background: colors.light.gray10,
      border: colors.transparent,
    },
    item: colors.light.black,
    itemBg: colors.light.white,
    itemContainerBg: colors.light.gray12,
    itemHover: colors.light.white,
    itemHoverBg: colors.light.brand00,
    label: colors.light.gray02,
    underline: colors.light.brand00,
    bgShadow:`0 2px 12px rgba(22, 36, 59, 0.36)`,
    border: `0`,
  });
}

function dark(context: Context) {
  const { colors } = context;
  return base(context, {
    mainButton: {
      text: colors.dark.white,
      icon: colors.dark.gray02,
      background: colors.dark.black,
      border: colors.transparent,
    },
    itemBg: colors.dark.gray10,
    item: colors.dark.white,
    itemContainerBg: colors.dark.black,
    itemHover: colors.dark.white,
    itemHoverBg: colors.dark.brand00,
    label: colors.dark.gray02,
    underline: colors.dark.brand00,
    bgShadow:`0 2px 12px rgba(0, 0, 0, 0.4)`,
    border: `0`,
  });
}

function highContrast(context: Context) {
  const { colors } = context;
  return base(context, {
    mainButton: {
      text: colors.highContrast.white,
      icon: colors.highContrast.white,
      background: colors.highContrast.black,
      border: colors.highContrast.white,
    },
    item: colors.highContrast.white,
    itemBg: colors.highContrast.black,
    itemContainerBg: colors.highContrast.black,
    itemHover: colors.highContrast.black,
    itemHoverBg: colors.highContrast.yellow,
    label: colors.highContrast.black,
    underline: colors.highContrast.white,
    bgShadow:`0 0 0 0`,
    border: `1px solid`,
  });
}

export function dropdown(context: Context) {
  return chooseStyle(context, light, dark, highContrast);
}
