import { Context } from '../context';
import { TableColors, TableStyles } from './table-styles';

export function base(c: Context, colors: TableColors): TableStyles {
  const { rem } = c;
  return {
    table: {
      backgroundColor: colors.tableBg,
      width: '100%',
      borderCollapse: 'collapse',
      padding: 0,
      margin: 0,
    },
    tbody: {},
    td: {
      padding: `${rem(0.5)} ${rem(1)}`,
      color: colors.td,
    },
    tr: {
      borderTop: `${colors.trBorder} ${rem(0.2)} solid`,
      borderBottom: `${colors.trBorder} ${rem(0.2)} solid`,
    },
    trFirst: {
      borderTop: 0,
    },
    trLast: {
      borderBottom: 0,
    },
    thead: {},
    th: {
      backgroundColor: colors.thBg,
      textAlign: 'left',
      padding: `${rem(0.5)} ${rem(1)}`,
      color: colors.th,
      fontWeight: 'lighter',
    },
  };
}
