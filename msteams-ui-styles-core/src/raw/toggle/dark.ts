import { Context } from '../context';
import { base } from './base';
import { ToggleStyles } from './toggle-styles';

export function Dark(c: Context): ToggleStyles {
  return base(c, {
    sliderBackground: c.colors.dark.black,
    sliderBall: c.colors.dark.gray11,
    sliderFocus: c.colors.dark.brand00,
    sliderBackgroundChecked: c.colors.dark.green,
    sliderBallChecked: c.colors.dark.white,
  });
}
