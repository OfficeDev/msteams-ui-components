import { Context } from '../context';
import { InputStyles } from './input-styles';

export function base(c: Context): InputStyles {
  const { rem } = c;
  return {
    label: {
      position: 'relative',
      padding: 0,
      margin: 0,
      display: 'inline-block',
    },
    normal: {
      height: rem(3.2),
      width: rem(20),
      borderRadius: rem(0.3),
      border: 0,
      backgroundColor: '#EEF1F5',
      padding: `${rem(0.8)} ${rem(1.2)}`,
      margin: 0,
    },
    focusUnderline: {
      // content: '"ok"',
      display: 'inline-block',
      width: rem(20),
      height: rem(0.1),
      backgroundColor: 'red',
      position: 'absolute',
      left: 0,
      bottom: rem(0.1),
    },
  };
}
