import { chooseStyle, IContext } from '../context';
import { hiddenInput } from './hidden-input';

interface IToggleColors {
  rest: {
    background: string;
    ball: string;
    border: string;
  };
  focus: {
    border: string;
  };
  disabled: {
    background: string;
    ball: string;
    border: string;
  };
  checked: {
    background: string;
    ball: string;
  };
}

const width = 4;
const height = 2;
const ballSize = 1.4;
const ballDeltaX = 0.3;

function base(context: IContext, colors: IToggleColors) {
  const names = {
    container: 'toggle',
    input: 'toggle-input',
    slider: 'toggle-ball',
  };
  const { css, rem } = context;
  const delta = width - ballDeltaX * 2 - ballSize;

  const inputClass = hiddenInput(context);

  return {
    container: css(names.container, {
      display: 'inline-block',
      lineHeight: 1,
    }),
    input: inputClass,
    slider: css(names.slider, {
      position: 'relative',
      cursor: 'pointer',
      border: 0,
      margin: rem(0.2),
      padding: 0,
      width: rem(width),
      height: rem(height),
      backgroundColor: colors.rest.background,
      borderRadius: rem(height),
      outline: 'none',
      boxShadow: `0 0 0 ${rem(0.1)} ${colors.rest.border}`,
      $nest: {
        '&:enabled:before': {
          position: 'absolute',
          content: '""',
          height: rem(ballSize),
          width: rem(ballSize),
          left: rem(ballDeltaX),
          top: rem((height - ballSize) / 2),
          backgroundColor: colors.rest.ball,
          transition: '0.2s',
          borderRadius: '50%',
          $nest: {
            [`.${inputClass}:checked + &`]: {
              backgroundColor: colors.checked.ball,
              transform: `translateX(${rem(delta)})`,
            },
            '&:disabled': {
              backgroundColor: colors.disabled.ball,
            },
          },
        },
        '&:disabled:before': {
          position: 'absolute',
          content: '""',
          height: rem(ballSize),
          width: rem(ballSize),
          left: rem(ballDeltaX),
          top: rem((height - ballSize) / 2),
          backgroundColor: colors.disabled.ball,
          transition: '0.2s',
          borderRadius: '50%',
          $nest: {
            [`.${inputClass}:checked + &`]: {
              transform: `translateX(${rem(delta)})`,
            },
          },
        },
        '&:focus:enabled': {
          boxShadow: `0 0 0 ${rem(0.2)} ${colors.focus.border}`,
          outline: 'none',
        },
        '&:disabled': {
          cursor: 'default',
          backgroundColor: colors.disabled.background,
          boxShadow: `0 0 0 ${rem(0.2)} ${colors.disabled.border}`,
        },
        [`.${inputClass}:checked + &:enabled`]: {
          backgroundColor: colors.checked.background,
        },
      },
    }),
  };
}

function light(context: IContext) {
  const { colors } = context;
  return base(context, {
    rest: {
      background: colors.light.gray10,
      ball: colors.light.gray02,
      border: colors.transparent,
    },
    focus: {
      border: colors.light.brand00,
    },
    disabled: {
      background: colors.light.gray12,
      ball: colors.light.gray06,
      border: colors.transparent,
    },
    checked: {
      background: colors.light.green,
      ball: colors.light.white,
    },
  });
}

function dark(context: IContext) {
  const { colors } = context;
  return base(context, {
    rest: {
      background: colors.dark.black,
      ball: colors.dark.gray02,
      border: colors.transparent,
    },
    focus: {
      border: colors.dark.brand00,
    },
    disabled: {
      background: colors.dark.gray12,
      ball: colors.dark.gray06,
      border: colors.transparent,
    },
    checked: {
      background: colors.dark.green,
      ball: colors.dark.white,
    },
  });
}

function highContrast(context: IContext) {
  const { colors } = context;
  return base(context, {
    rest: {
      background: colors.highContrast.black,
      ball: colors.highContrast.white,
      border: colors.highContrast.white,
    },
    focus: {
      border: colors.highContrast.yellow,
    },
    disabled: {
      background: colors.highContrast.black,
      ball: colors.highContrast.green,
      border: colors.highContrast.green,
    },
    checked: {
      background: colors.highContrast.blue,
      ball: colors.highContrast.black,
    },
  });
}

export function toggle(context: IContext) {
  return chooseStyle(context, light, dark, highContrast);
}
