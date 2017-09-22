import { style } from 'typestyle';
import { Context } from '../raw/context';
import { label as labelRaw } from '../raw/labels';
import { selected as selectedRaw } from '../raw/radiobutton/selected';
import { unselected as unselectedRaw } from '../raw/radiobutton/unselected';

function unselected(c: Context) {
  const styles = unselectedRaw(c);
  const checkedStyles = selectedRaw(c);
  const result = style(styles.normal, {
    $nest: {
      '&:hover': styles.hover,
      '&:active': styles.active,
      '&:disabled': styles.disabled,
      '&:focus': styles.focus,
      '&-selected': {
        ...checkedStyles.normal,
        $nest: {
          '&:hover': checkedStyles.hover,
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
  return style(labelRaw(c).normal);
}

export default {
  unselected,
  selected,
  label,
};
