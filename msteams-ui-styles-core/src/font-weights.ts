import { IRemFunction } from './context';
import { IFontWeightPalette } from './font-weight-palette';

export function FontWeights(rem: IRemFunction): IFontWeightPalette {
  return {
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
}
