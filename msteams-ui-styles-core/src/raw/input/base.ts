import { Context } from '../context';
import { InputColors, InputStyles } from './input-styles';

export function base(c: Context, inputColors: InputColors): InputStyles {
  const { rem } = c;
  return {
    container: {
      position: 'relative',
      padding: 0,
      margin: 0,
      display: 'block',
      overflow: 'hidden',
    },
    normal: {
      height: rem(3.2),
      width: '100%',
      borderRadius: rem(0.3),
      border: 0,
      backgroundColor: inputColors.background,
      padding: `${rem(0.8)} ${rem(1.2)}`,
      margin: 0,
      outline: 'none',
    },
    underline: {
      display: 'block',
      height: rem(0.2),
      position: 'absolute',
      backgroundColor: inputColors.underline,
      bottom: rem(0.1),
      width: '100%',
      transform: 'scaleX(0)',
      transformOrigin: 'left',
    },
    focusUnderline: {
      transition: 'all 0.5s ease-in-out',
      left: 0,
      transform: 'scaleX(1)',
    },
  };
}
