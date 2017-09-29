import { style } from 'typestyle';
import { Context } from '../raw/context';
import { toggle as toggleRaw } from '../raw/toggle';

export function toggle(c: Context) {
  const raw = toggleRaw(c);
  const inputClass = style(raw.input);
  return {
    container: style(raw.label),
    input: inputClass,
    slider: style(raw.sliderBackground, {
      $nest: {
        '&:before': raw.sliderBall,
        '&:focus:after': raw.sliderFocus,
        [`.${inputClass}:checked + &`]: raw.sliderBackgroundChecked,
        [`.${inputClass}:checked + &:before`]: raw.sliderBallChecked,
        [`.${inputClass}:checked + &:focus:after`]: raw.sliderFocusChecked,
      },
    }),
  };
}

export default toggle;
