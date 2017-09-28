import { Context } from '../context';
import { TextAreaColors, TextAreaStyles } from './textarea-styles';

export function base(c: Context, colors: TextAreaColors): TextAreaStyles {
  const { rem } = c;
  return {
    container: {
      position: 'relative',
      padding: 0,
      margin: 0,
      border: 0,
      overflow: 'hidden',
      display: 'block',
    },
    normal: {
      width: '100%',
      resize: 'none',
      borderRadius: rem(0.3),
      border: 0,
      backgroundColor: colors.background,
      padding: `${rem(0.8)} ${rem(1.2)}`,
      margin: 0,
      outline: 'none',
    },
    underline: {
      display: 'block',
      height: rem(0.2),
      position: 'absolute',
      backgroundColor: colors.underline,
      width: '100%',
      transform: 'scaleX(0)',
      left: 0,
      bottom: rem(0.2),
      transformOrigin: 'left',
    },
    focusUnderline: {
      transform: 'scaleX(1)',
      transition: 'all 0.5s ease-in-out',
    },
  };
}
