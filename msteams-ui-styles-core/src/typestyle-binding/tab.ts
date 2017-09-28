import { style } from 'typestyle';
import { Context } from '../raw/context';
import { tab as tabRaw } from '../raw/tab';

export function tab(c: Context) {
  const raw = tabRaw(c);
  const containerClass = style(raw.container);
  return {
    container: containerClass,
    normal: style({
      $nest: {
        [`.${containerClass} &`]: raw.normal,
      },
    }),
    active: style({
      $nest: {
        [`.${containerClass} &`]: raw.active,
      },
    }),
  };
}

export default tab;
