import { chooseStyle, Context } from '../context';
import { hiddenInput } from './hidden-input';

interface ToggleColors {
  sliderBackground: string;
  sliderFocus: string;
  sliderBall: string;
  sliderBackgroundChecked: string;
  sliderBallChecked: string;
}

const width = 6;
const height = 2;
const ballSize = 1.4;
const ballDeltaX = 0.3;

function base(context: Context, colors: ToggleColors) {
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
      backgroundColor: colors.sliderBackground,
      borderRadius: rem(height),
      outline: 'none',
      $nest: {
        '&:before': {
          position: 'absolute',
          content: '""',
          height: rem(ballSize),
          width: rem(ballSize),
          left: rem(ballDeltaX),
          top: rem((height - ballSize) / 2),
          backgroundColor: colors.sliderBall,
          transition: '0.2s',
          borderRadius: '50%',
          $nest: {
            [`.${inputClass}:checked + &`]: {
              backgroundColor: colors.sliderBallChecked,
              transform: `translateX(${rem(delta)})`,
            },
          },
        },
        '&:focus': {
          boxShadow: `0 0 0 ${rem(0.2)} ${colors.sliderFocus}`,
          outline: 'none',
        },
        [`.${inputClass}:checked + &`]: {
          backgroundColor: colors.sliderBackgroundChecked,
        },
      },
    }),
  };
}

function light(context: Context) {
  const { colors } = context;
  return base(context, {
    sliderBackground: colors.light.gray10,
    sliderBall: colors.light.brand06,
    sliderFocus: colors.light.brand00,
    sliderBackgroundChecked: colors.light.green,
    sliderBallChecked: colors.light.brand04,
  });
}

function dark(context: Context) {
  const { colors } = context;
  return base(context, {
    sliderBackground: colors.dark.black,
    sliderBall: colors.dark.gray02,
    sliderFocus: colors.dark.brand00,
    sliderBackgroundChecked: colors.dark.green,
    sliderBallChecked: colors.dark.white,
  });
}

function highContrast(context: Context) {
  const { colors } = context;
  return base(context, {
    sliderBackground: colors.highContrast.white,
    sliderBall: colors.highContrast.yellow,
    sliderFocus: colors.highContrast.green,
    sliderBackgroundChecked: colors.light.green,
    sliderBallChecked: colors.light.brand04,
  });
}

export function toggle(context: Context) {
  return chooseStyle(context, light, dark, highContrast);
}
