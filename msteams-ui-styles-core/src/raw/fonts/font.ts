import { Context } from '../context';
import { FontStyles } from './font-styles';

export function font(context: Context): FontStyles {
  const style = {
    semilight: {
      fontFamily: "'Segoe UI Light', 'Segoe UI', Tahoma, Helvetica, Sans-Serif",
      fontWeight: 300,
    },
    regular: {
      fontFamily: "'Segoe UI', Tahoma, Helvetica, Sans-Serif",
      fontWeight: 400,
    },
    semibold: {
      fontFamily: "'Segoe UI Semibold', 'Segoe UI', Tahoma, Helvetica, Sans-Serif",
      fontWeight: 600,
    },
    bold: {
      fontFamily: "'Segoe UI Bold', 'Segoe UI', Tahoma, Helvetica, Sans-Serif",
      fontWeight: 700,
    },
  };

  return context.style({
    light: style,
    dark: style,
    highContrast: style,
  });
}
