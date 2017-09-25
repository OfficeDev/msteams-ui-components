import { style } from 'typestyle';
import { Context } from '../raw/context';
import { input as inputRaw } from '../raw/input';

function label(c: Context) {
  const raw = inputRaw(c);
  return style(raw.label);
}

function input(c: Context) {
  const raw = inputRaw(c);
  return style(raw.normal);
}

function inputUnderline(c: Context) {
  const raw = inputRaw(c);
  const inputClass = input(c);
  return style(raw.underline, {
    $nest: {
      [`.${inputClass}:focus + &`]: raw.focusUnderline,
    },
  });
}

export default {
  label,
  input,
  inputUnderline,
};
