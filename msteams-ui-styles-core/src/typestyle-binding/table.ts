import { style } from 'typestyle';
import { Context } from '../raw/context';
import { table as tableRaw } from '../raw/table';

export function table(c: Context) {
  const raw = tableRaw(c);
  return {
    table: style(raw.table),
    tbody: style(raw.tbody),
    tr: style(raw.tr, {
      $nest: {
        '&:first-child': raw.trFirst,
        '&:last-child': raw.trLast,
      },
    }),
    td: style(raw.td),
    thead: style(raw.thead),
    th: style(raw.th),
  };
}

export default table;
