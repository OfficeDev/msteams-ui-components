import { style } from 'typestyle';
import { Context } from '../raw/context';
import { base as tableRaw } from '../raw/table/base';

export function table(c: Context) {
  const raw = tableRaw(c);
  return {
    table: style(raw.table),
    tbody: style(raw.tbody),
    tr: style(raw.tr),
    td: style(raw.td),
  };
}
