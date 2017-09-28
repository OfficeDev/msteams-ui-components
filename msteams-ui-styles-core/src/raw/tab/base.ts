import { Context } from '../context';
import { TabColors, TabStyles } from './tab-styles';

export function base(c: Context, tabColors: TabColors): TabStyles {
  const { rem } = c;
  return {
    container: {
      width: '100%',
      boxShadow: `${rem(0)} ${rem(0.2)} ${rem(0.3)} ${rem(-0.3)} ${tabColors.containerUnderline}`,
      padding: 0,
      margin: 0,
    },
    normal: {
      outline: 'none',
      background: 0,
      border: 0,
      padding: `${rem(1)}`,
      margin: 0,
      cursor: 'pointer',
      display: 'inline-block',
      borderBottom: `transparent ${rem(0.3)} solid`,
      color: tabColors.text,
      paddingBottom: rem(0.8),
    },
    active: {
      borderBottomColor: tabColors.underline,
      color: tabColors.textActive,
    },
  };
}
