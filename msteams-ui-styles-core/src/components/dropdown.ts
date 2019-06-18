import { chooseStyle, IContext } from '../context';

interface IDropdownColors {
  mainButton: {
    text: string;
    background: string;
    icon: string;
    border: string;
    disabled: {
      border: string;
      background: string;
      underline: string;
      text: string;
      placeholder: string;
    },
  };
  itemContainerBg: string;
  itemBg: string;
  item: string;
  itemHoverBg: string;
  itemHover: string;
  label: string;
  underline: string;
  bgShadow: string;
  border: string;
}

function base(context: IContext, colors: IDropdownColors) {
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
    boxShadow: `0px ${rem(0.2)} ${rem(1.2)} 0px ${colors.bgShadow}`,
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
        border: colors.border,
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
          '&:focus:enabled': {
            borderBottomWidth: rem(0.2),
            borderBottomColor: colors.underline,
          },
          '&:disabled': {
            borderColor: colors.mainButton.disabled.border,
            background: colors.mainButton.disabled.background,
            borderBottomColor: colors.mainButton.disabled.underline,
            color: colors.mainButton.disabled.text,
            cursor: 'default',
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
        $nest: {
          '&:enabled': {
            color: colors.mainButton.icon,
          },
        },
      }),
    },
    itemContainer: itemContainerClass,
    itemContainerRight: css(names.item.caret, {
      $nest: {
        [`&.${itemContainerClass}`]: {
          right: 0,
          left: 'auto',
          color:colors.item,
        },
      },
    }),
    showItems: css(names.item.showItems, {
      $nest: {
        [`&.${itemContainerClass}`]: {
          minWidth: `100%`,
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

function light(context: IContext) {
  const { colors } = context;
  return base(context, {
    mainButton: {
      text: colors.light.gray02,
      icon: colors.light.gray02,
      background: colors.light.gray10,
      border: colors.transparent,
      disabled: {
        border: colors.transparent,
        background: colors.light.gray12,
        underline: colors.transparent,
        text: colors.light.gray08,
        placeholder: colors.light.gray06,
      },
    },
    item: colors.light.gray02,
    itemBg: colors.light.white,
    itemContainerBg: colors.light.gray12,
    itemHover: colors.light.white,
    itemHoverBg: colors.light.brand00,
    label: colors.light.gray02,
    underline: colors.light.brand00,
    bgShadow: 'rgba(22, 35, 58, 0.36)',
    border: 'none',
  });
}

function dark(context: IContext) {
  const { colors } = context;
  return base(context, {
    mainButton: {
      text: colors.dark.white,
      icon: colors.dark.gray02,
      background: colors.dark.black,
      border: colors.transparent,
      disabled: {
        border: colors.transparent,
        background: colors.dark.gray12,
        underline: colors.transparent,
        text: colors.dark.gray08,
        placeholder: colors.dark.gray06,
      },
    },
    itemBg: colors.dark.gray10,
    item: colors.dark.white,
    itemContainerBg: colors.dark.black,
    itemHover: colors.dark.white,
    itemHoverBg: colors.dark.brand00,
    label: colors.dark.gray02,
    underline: colors.dark.brand00,
    bgShadow: 'rgba(0, 0, 0, 0.4)',
    border: 'none',
  });
}

function highContrast(context: IContext) {
  const { colors, rem } = context;
  return base(context, {
    mainButton: {
      text: colors.highContrast.white,
      icon: colors.highContrast.white,
      background: colors.highContrast.black,
      border: colors.highContrast.white,
      disabled: {
        border: colors.highContrast.green,
        background: colors.highContrast.black,
        underline: colors.highContrast.white,
        text: colors.highContrast.green,
        placeholder: colors.highContrast.green,
      },
    },
    item: colors.highContrast.white,
    itemBg: colors.highContrast.black,
    itemContainerBg: colors.highContrast.black,
    itemHover: colors.highContrast.black,
    itemHoverBg: colors.highContrast.yellow,
    label: colors.highContrast.white,
    underline: colors.highContrast.yellow,
    bgShadow: colors.transparent,
    border: `${rem(0.1)} solid ${colors.highContrast.white}`,
  });
}

export function dropdown(context: IContext) {
  return chooseStyle(context, light, dark, highContrast);
}
