import { style } from 'typestyle';
import { Context } from '../raw/context';
import * as labelRaw from '../raw/labels/label';
import * as selectedRaw from '../raw/radiobutton/selected';
import * as unselectedRaw from '../raw/radiobutton/unselected';

function unselected(c: Context) {
  const result = style(unselectedRaw.normal(c), {
    $nest: {
      '&:hover': unselectedRaw.hover(c),
      '&:active': unselectedRaw.active(c),
      '&:disabled': unselectedRaw.disabled(c),
      '&:focus': unselectedRaw.focus(c),
      '&-selected': {
        ...selectedRaw.normal(c),
        $nest: {
          '&:hover': selectedRaw.hover(c),
        },
      },
    },
  });
  return result;
}

function selected(c: Context) {
  const result = unselected(c);
  return `${result}-selected`;
}

function label(c: Context) {
  return style(labelRaw.normal(c));
}

export default {
  unselected,
  selected,
  label,
};
