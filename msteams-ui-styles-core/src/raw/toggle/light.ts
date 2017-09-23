import { Context } from '../context';
import { base } from './base';
import { ToggleStyles } from './toggle-styles';

export function Light(c: Context): ToggleStyles {
  return base(c, {
    sliderBackground: c.colors.light.gray10,
    sliderBall: c.colors.light.brand06,
    sliderFocus: c.colors.light.brand00,
    sliderBackgroundChecked: c.colors.light.green,
    sliderBallChecked: c.colors.light.brand04,
  });
}
