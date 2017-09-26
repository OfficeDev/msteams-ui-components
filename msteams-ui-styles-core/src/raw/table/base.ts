import { Context } from '../context';
import { TableStyles } from './table-styles';

export function base(c: Context): TableStyles {
  return {
    table: {
      backgroundColor: 'yellow',
      width: '100%',
    },
    tbody: {},
    td: {
    },
    tr: {
    },
  };
}
