import { chooseStyle, IContext } from '../context';
import { hiddenInput } from './hidden-input';

interface IRadioButtonColors {
  rest: {
    border: string;
    background: string;
    text: string;
  };
  hover: {
    background: string;
    border: string;
  };
  disabled: {
    background: string;
    border: string;
    text: string;
  };
  focus: {
    outline: string;
  };
  selected: {
    background: string;
    border: string;
    text: string;
  };
  container: string;
}

function base(context: IContext, colors: IRadioButtonColors) {
  const names = {
    container: 'radio-container',
    button: 'radio-button',
    label: 'radio-label',
  };
  const { css, rem, font } = context;
  const { sizes } = font;

  const labelClass = css(names.label);
  const radioClass = css(names.button, {
    position: 'absolute',
    top: rem(0.4),
    left: rem(0.2),
    width: rem(1.2),
    height: rem(1.2),
    border: `${rem(0.1)} solid`,
    borderColor: colors.rest.border,
    background: colors.rest.background,
    borderRadius: '50%',
  });

  return {
    container: css(names.container, sizes.caption, {
      display: 'block',
      position: 'relative',
      ['-webkit-user-select']: 'none',
      ['-moz-user-select']: 'none',
      ['-ms-user-select']: 'none',
      userSelect: 'none',
      marginLeft: rem(0),
      padding: rem(0.2),
      paddingLeft: rem(2.6),
      $nest: {
        '& + &': {
          marginTop: rem(0.4),
        },
        '& input': {
          position: 'absolute',
          width: 0,
          height: 0,
          opacity: 0,
        },
        [`& input ~ .${labelClass}`]: {
          cursor: 'pointer',
          color: colors.rest.text,
        },
        [`& input:disabled ~ .${labelClass}`]: {
          cursor: 'default',
          color: colors.disabled.text,
        },
        [`& input:checked ~ .${labelClass}`]: {
          color: colors.selected.text,
        },
        [`& input ~ .${radioClass}`]: {
          cursor: 'pointer',
          color: colors.rest.text,
        },
        [`& input:disabled ~ .${radioClass}`]: {
          cursor: 'default',
          color: colors.disabled.text,
          background: colors.disabled.background,
          borderColor: colors.disabled.border,
        },
        [`& input:enabled:hover ~ .${radioClass}`]: {
          background: colors.hover.background,
          borderColor: colors.hover.border,
        },
        [`& input:checked:hover ~ .${radioClass}`]: {
          borderColor: colors.selected.border,
          background: colors.selected.background,
        },
        [`& input:enabled:focus ~ .${radioClass}`]: {
          boxShadow: `0 0 0 ${rem(0.2)} ${colors.focus.outline}`,
          outline: 'none',
        },
        [`& input:checked ~ .${radioClass}`]: {
          borderColor: colors.selected.border,
          background: colors.selected.background,
        },
      },
    }),
    radio: radioClass,
    label: labelClass,
  };
}

function light(context: IContext) {
  const { colors } = context;
  return base(context, {
    rest: {
      border: colors.light.gray02,
      background: colors.transparent,
      text: colors.light.gray02,
    },
    hover: {
      border: colors.light.gray02,
      background: colors.transparent,
    },
    disabled: {
      border: colors.light.gray06,
      background: colors.light.gray06,
      text: colors.light.gray06,
    },
    focus: {
      outline: colors.light.brand12,
    },
    selected: {
      background: colors.light.brand00,
      border: colors.light.brand00,
      text : colors.light.black,
    },
    container: colors.transparent,
  });
}

function dark(context: IContext) {
  const { colors } = context;
  return base(context, {
    rest: {
      border: colors.dark.gray02,
      background: colors.transparent,
      text: colors.dark.gray02,
    },
    hover: {
      border: colors.dark.gray02,
      background: colors.transparent,
    },
    disabled: {
      border: colors.dark.gray06,
      background: colors.dark.gray10,
      text: colors.dark.gray06,
    },
    focus: {
      outline: colors.dark.brand00Light,
    },
    selected: {
      background: colors.dark.brand06,
      border: colors.dark.brand00,
      text : colors.dark.white,
    },
    container: colors.transparent,
  });
}

function highContrast(context: IContext) {
  const { colors } = context;
  return base(context, {
    rest: {
      border: colors.highContrast.white,
      background: colors.transparent,
      text: colors.highContrast.white,
    },
    hover: {
      border: colors.highContrast.white,
      background: colors.transparent,
    },
    disabled: {
      background: colors.transparent,
      border: colors.highContrast.green,
      text: colors.highContrast.green,
    },
    focus: {
      outline: colors.highContrast.yellow,
    },
    selected: {
      background: colors.highContrast.blue,
      border: colors.highContrast.blue,
      text: colors.highContrast.white,
    },
    container: colors.transparent,
  });
}

export function radioButton(context: IContext) {
  return chooseStyle(context, light, dark, highContrast);
}
