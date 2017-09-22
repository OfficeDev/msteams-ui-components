import { style } from 'typestyle';
import { Context } from '../raw/context';
import { toggle as toggleRaw } from '../raw/toggle';

function label(c: Context) {
  const styles = toggleRaw(c);
  return style(styles.label);
}

function input(c: Context) {
  const styles = toggleRaw(c);
  return style(styles.input);
}

function slider(c: Context) {
  const styles = toggleRaw(c);
  return style(styles.sliderBackground, {
    $nest: {
      '&:before': styles.sliderBall,
      '&:focus:after': styles.sliderFocus,
    },
  });
}

function sliderChecked(c: Context) {
  const styles = toggleRaw(c);
  return style(styles.sliderBackgroundChecked, {
    $nest: {
      '&:before': styles.sliderBallChecked,
      '&:focus:after': styles.sliderFocusChecked,
    },
  });
}

export default {
  label,
  input,
  slider,
  sliderChecked,
};
