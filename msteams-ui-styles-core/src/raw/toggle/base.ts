import { CSSProperties } from 'typestyle/lib/types';
import { Context } from '../context';
import { ToggleColors, ToggleStyles } from './toggle-styles';

const width = 6;
const height = 3.2;
const ballSize = 2.5;
const ballDeltaX = 0.3;

export function base(c: Context, toggleColors: ToggleColors): ToggleStyles {
  const { rem } = c;
  const delta = width - ballDeltaX * 2 - ballSize;

  const sliderBackground: CSSProperties = {
    position: 'absolute',
    cursor: 'pointer',
    border: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    backgroundColor: toggleColors.sliderBackground,
    transition: '0.4s',
    borderRadius: rem(height),
    outline: 'none',
  };

  const sliderFocus: CSSProperties = {
    content: '""',
    position: 'absolute',
    top: rem(-0.1),
    bottom: rem(-0.1),
    left: rem(-0.1),
    right: rem(-0.1),
    borderRadius: rem(height),
    border: `${rem(0.2)} solid ${toggleColors.sliderFocus}`,
  };

  const sliderBall: CSSProperties = {
    position: 'absolute',
    content: '""',
    height: rem(ballSize),
    width: rem(ballSize),
    left: rem(ballDeltaX),
    top: rem((height - ballSize) / 2),
    backgroundColor: toggleColors.sliderBall,
    transition: '0.4s',
    borderRadius: '50%',
  };

  return {
    label: {
      position: 'relative',
      display: 'inline-block',
      width: rem(width),
      height: rem(height),
    },
    input: {
      display: 'none',
    },
    sliderBackground,
    sliderFocus,
    sliderBall,
    sliderBackgroundChecked: Object.assign({}, sliderBackground, {
      backgroundColor: toggleColors.sliderBackgroundChecked,
    }),
    sliderFocusChecked: Object.assign({}, sliderFocus, {}),
    sliderBallChecked: Object.assign({}, sliderBall, {
      backgroundColor: toggleColors.sliderBallChecked,
      transform: `translateX(${rem(delta)})`,
    }),
  };
}
