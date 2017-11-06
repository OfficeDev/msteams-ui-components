import { style } from 'typestyle';
import { chooseStyle, Context } from '../context';

interface ToggleColors {
  sliderBackground: string;
  sliderFocus: string;
  sliderBall: string;
  sliderBackgroundChecked: string;
  sliderBallChecked: string;
}

const width = 6;
const height = 2; //changed the heigth of slider to 20 px
const ballSize = 1.4; //changed the ball size to 14 x 14
const ballDeltaX = 0.3;

function base(context: Context, colors: ToggleColors) {
  const { rem } = context;
  const delta = width - ballDeltaX * 2 - ballSize;

  const inputClass = style({
    display: 'none',
  });

  return {
    container: style({
      position: 'relative',
      display: 'inline-block',
      width: rem(width),
      height: rem(height),
    }),
    input: inputClass,
    slider: style({
      position: 'absolute',
      cursor: 'pointer',
      border: 0,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
      backgroundColor: colors.sliderBackground,
      transition: '0.4s',
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
          transition: '0.4s',
          borderRadius: '50%',
          $nest: {
            [`.${inputClass}:checked + &`]: {
              backgroundColor: colors.sliderBallChecked,
              transform: `translateX(${rem(delta)})`,
            },
          },
        },
        '&:focus:after': {
          content: '""',
          position: 'absolute',
          top: rem(-0.1),
          bottom: rem(-0.1),
          left: rem(-0.1),
          right: rem(-0.1),
          borderRadius: rem(height),
          border: `${rem(0.2)} solid ${colors.sliderFocus}`,
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
