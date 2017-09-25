import { style } from 'typestyle';
import { checked as checkedRaw } from '../raw/checkbox/checked';
import { unchecked as uncheckedRaw } from '../raw/checkbox/unchecked';
import { Context } from '../raw/context';
import { label as labelRaw } from '../raw/labels';

function unchecked(c: Context) {
  const styles = uncheckedRaw(c);
  const checkedStyles = checkedRaw(c);
  const result = style(styles.normal, {
    $nest: {
      '&:hover': styles.hover,
      '&:active': styles.active,
      '&:disabled': styles.disabled,
      '&:focus': styles.focus,
      '&-checked': {
        ...checkedStyles.normal,
        $nest: {
          '&:hover': checkedStyles.hover,
          '&::before': checkedStyles.before,
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
  return style(labelRaw(c).normal);
}

export default {
  unchecked,
  checked,
  label,
};
