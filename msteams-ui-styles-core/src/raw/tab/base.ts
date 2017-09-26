import { Context } from '../context';
import { TabColors, TabStyles } from './tab-styles';

export function base(c: Context, tabColors: TabColors): TabStyles {
  const { rem } = c;
  return {
    container: {},
    normal: {
      outline: 'none',
      background: 0,
      border: 0,
      padding: 0,
      margin: `${rem(0)} ${rem(1)}`,
      cursor: 'pointer',
      display: 'inline-block',
      borderBottom: `transparent ${rem(0.2)} solid`,
      color: tabColors.text,
    },
    active: {
      borderBottomColor: tabColors.underline,
    },
  };
}
