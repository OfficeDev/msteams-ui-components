import { Context } from '../context';
import { base } from './base';
import { ToggleStyles } from './toggle-styles';

export function highContrast(c: Context): ToggleStyles {
  return base(c, {
    sliderBackground: c.colors.white,
    sliderBall: c.colors.highContrast.yellow,
    sliderFocus: c.colors.highContrast.green,
    sliderBackgroundChecked: c.colors.light.green,
    sliderBallChecked: c.colors.light.brand04,
  });
}
