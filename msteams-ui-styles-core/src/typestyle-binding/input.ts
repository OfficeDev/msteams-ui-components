import { style } from 'typestyle';
import { Context } from '../raw/context';
import { input as inputRaw } from '../raw/input';

export function input(c: Context) {
  const raw = inputRaw(c);
  const inputClass = style(raw.normal);
  return {
    container: style(raw.container),
    input: inputClass,
    underline: style(raw.underline, {
      $nest: {
        [`.${inputClass}:focus + &`]: raw.focusUnderline,
      },
    }),
    label: style(raw.label),
  };
}

export default input;
