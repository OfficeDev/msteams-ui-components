import { style } from 'typestyle';
import { Context } from '../context';

interface TableColors {
  tableBg: string;
  trBorder: string;
  thBg: string;
  th: string;
  td: string;
}

function base(c: Context, colors: TableColors) {
  const { rem } = c;
  return {
    table: style({
      backgroundColor: colors.tableBg,
      width: '100%',
      borderCollapse: 'collapse',
      padding: 0,
      margin: 0,
    }),
    tbody: style({}),
    td: style({
      padding: `${rem(0.5)} ${rem(1)}`,
      color: colors.td,
    }),
    tr: style({
      borderTop: `${colors.trBorder} ${rem(0.2)} solid`,
      borderBottom: `${colors.trBorder} ${rem(0.2)} solid`,
    }, {
      $nest: {
        '&:first-child': {
          borderTop: 0,
        },
        '&:last-child': {
          borderBottom: 0,
        },
      },
    }),
    thead: style({}),
    th: style({
      backgroundColor: colors.thBg,
      textAlign: 'left',
      padding: `${rem(0.5)} ${rem(1)}`,
      color: colors.th,
      fontWeight: 'lighter',
    }),
  };
}

function light(context: Context) {
  const { colors } = context;
  return base(context, {
    tableBg: colors.light.gray12,
    th: colors.light.gray04,
    td: colors.light.black,
    thBg: colors.white,
    trBorder: colors.white,
  });
}

function dark(context: Context) {
  const { colors } = context;
  return base(context, {
    tableBg: colors.dark.black,
    th: colors.dark.white,
    td: colors.dark.white,
    thBg: colors.black,
    trBorder: colors.dark.brand00,
  });
}

function highContrast(context: Context) {
  const { colors } = context;
  return base(context, {
    tableBg: colors.black,
    th: colors.highContrast.green,
    td: colors.white,
    thBg: colors.black,
    trBorder: colors.highContrast.yellow,
  });
}

export function table(context: Context) {
  return context.style({
    light: light(context),
    dark: dark(context),
    highContrast: highContrast(context),
  });
}
