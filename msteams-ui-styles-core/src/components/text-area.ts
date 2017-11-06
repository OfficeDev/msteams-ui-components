import { baseStyle, iconTypes, iconWeights } from 'msteams-ui-icons-core';
import { classes, style } from 'typestyle';
import { chooseStyle, Context } from '../context';
import { fontSizes } from './font-sizes';
import { fontWeights } from './font-weights';

interface TextAreaColors {
  rest: {
    background: string;
    border: string;
    underline: string;
    text:string;
  };
  active: {
    background: string;
    underline: string;
  };
  disabled: {
    background: string;
    underline: string;
    text:string;
  };
  hover: {
    background: string;
    underline: string;
  };
  focus: {
    background: string;
    underline: string;
  };
  label: string;
  errorLabel: string;
}

function base(context: Context, colors: TextAreaColors) {
  baseStyle(iconWeights.light);
  const { rem } = context;
  const sizes = fontSizes(context);
  const weights = fontWeights(context);

  return {
    container: style({
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexAlign: 'stretch',
      flexDirection: 'column',
    }),
    textArea: style({
      flex: 1,
      borderRadius: rem(0.3),
      border: `${rem(0.2)} solid ${colors.rest.border}`,
      background: colors.rest.background,
      padding: `${rem(0.8)} ${rem(1.2)}`,
      margin: 0,
      color: colors.rest.text,
      font: 'inherit',
      outline: 'none',
      ['-webkit-box-sizing']: 'border-box',
      ['-moz-box-sizing']: 'border-box',
      boxSizing: 'border-box',
      resize: 'none',
    }, {
        $nest: {
          '&:active:enabled': {
            background: colors.active.background,
            borderBottomColor: colors.active.underline,
          },
          '&:hover:inactive:enabled': {
            background: colors.hover.background,
            borderBottomColor: colors.hover.underline,
          },
          '&:disabled': {
            background: colors.disabled.background,
            borderBottomColor: colors.disabled.underline,
            color:colors.disabled.text,
          },
          '&:focus': {
            borderBottomColor: colors.active.underline,
            background: colors.focus.background,
          },
        },
      }),
    label: classes(style({
      display: 'inline-block',
      padding: 0,
      border: 0,
      marginBottom: rem(0.8),
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
      color: colors.label,
    }), sizes.caption, weights.regular),
    errorLabel: classes(style({
      color: colors.errorLabel,
      padding: 0,
      border: 0,
      marginBottom: rem(0.8),
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
      float: 'right',
    }), sizes.caption, weights.regular),
    errorIcon: style({
      $nest: {
        '&:after': {
          fontFamily: 'MSTeamsIcons-Light',
          content: iconTypes.error,
          position: 'absolute',
          color: colors.errorLabel,
          right: rem(1.2),
          bottom: rem(1),
        },
      },
    }),
  };
}

function light(context: Context) {
  const { colors } = context;
  return base(context, {
    rest: {
      background: colors.light.gray10,
      border: colors.transparent,
      underline: colors.transparent,
      text:colors.light.gray02,
    },
    active: {
      background: colors.light.gray10,
      underline: colors.light.brand00,
    },
    disabled: {
      background: colors.light.gray12,
      underline: colors.transparent,
      text:colors.light.gray08,
    },
    hover: {
      background: colors.light.gray10,
      underline: colors.transparent,
    },
    focus: {
      background: colors.light.gray10,
      underline: colors.light.brand00,
    },
    label: colors.light.gray01,
    errorLabel: colors.light.red,
  });
}

function dark(context: Context) {
  const { colors } = context;
  return base(context, {
    rest: {
      background: colors.dark.black,
      border: colors.transparent,
      underline: colors.transparent,
      text:colors.dark.gray02,
    },
    active: {
      background: colors.dark.black,
      underline: colors.dark.brand00,
    },
    disabled: {
      background: colors.dark.gray12,
      underline: colors.transparent,
      text:colors.dark.gray08,
    },
    hover: {
      background: colors.dark.black,
      underline: colors.transparent,
    },
    focus: {
      background: colors.dark.black,
      underline: colors.dark.brand00,
    },
    label: colors.dark.white,
    errorLabel: colors.dark.red,
  });
}

function highContrast(context: Context) {
  const { colors } = context;
  return base(context, {
    rest: {
      background: colors.highContrast.black,
      border: colors.highContrast.white,
      underline: colors.transparent,
      text:colors.highContrast.white,
    },
    active: {
      background: colors.highContrast.black,
      underline: colors.highContrast.yellow,
    },
    disabled: {
      background: colors.highContrast.green,
      underline: colors.highContrast.white,
      text:colors.highContrast.white,
    },
    hover: {
      background: colors.highContrast.black,
      underline: colors.transparent,
    },
    focus: {
      background: colors.highContrast.black,
      underline: colors.highContrast.yellow,
    },
    label: colors.highContrast.white,
    errorLabel: colors.highContrast.yellow,
  });
}

export function textArea(context: Context) {
  return chooseStyle(context, light, dark, highContrast);
}
