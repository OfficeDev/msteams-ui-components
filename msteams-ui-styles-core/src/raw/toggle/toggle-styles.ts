import { CSSProperties } from 'typestyle/lib/types';

export interface ToggleColors {
  sliderBackground: string;
  sliderFocus: string;
  sliderBall: string;
  sliderBackgroundChecked: string;
  sliderBallChecked: string;
}

export interface ToggleStyles {
  label: CSSProperties;
  input: CSSProperties;
  sliderBackground: CSSProperties;
  sliderBall: CSSProperties;
  sliderFocus: CSSProperties;
  sliderBackgroundChecked: CSSProperties;
  sliderBallChecked: CSSProperties;
  sliderFocusChecked: CSSProperties;
}
