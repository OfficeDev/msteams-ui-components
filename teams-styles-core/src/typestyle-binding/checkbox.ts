import { style } from 'typestyle';
import * as checkedRaw from '../raw/checkbox/checked';
import * as uncheckedRaw from '../raw/checkbox/unchecked';
import { Context } from '../raw/context';
import * as labelRaw from '../raw/labels/label';

function unchecked(c: Context) {
  const result = style(uncheckedRaw.normal(c), {
    $nest: {
      '&:hover': uncheckedRaw.hover(c),
      '&:active': uncheckedRaw.active(c),
      '&:disabled': uncheckedRaw.disabled(c),
      '&:focus': uncheckedRaw.focus(c),
      '&-checked': {
        ...checkedRaw.normal(c),
        $nest: {
          '&:hover': checkedRaw.hover(c),
          '&::before': checkedRaw.before(c),
        },
      },
    },
  });
  return result;
}

function checked(c: Context) {
  const result = unchecked(c);
  return `${result}-checked`;
}

function label(c: Context) {
  return style(labelRaw.normal(c));
}

export default {
  unchecked,
  checked,
  label,
};
