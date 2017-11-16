import { chooseStyle, Context } from '../context';

interface TableColors {
  table: {
    background: string;
    text: string;
  };
  head: {
    background: string;
  };
  body: {
    background: string;
  };
  row: {
    border: string;
  };
}

function base(c: Context, colors: TableColors) {
  const names = {
    table: 'table',
    thead: 'thead',
    tbody: 'tbody',
    td: 'td',
    tr: 'tr',
    th: 'th',
  };
  const { css, rem, font } = c;
  const { sizes, weights } = font;

  return {
    table: css(names.table, {
      backgroundColor: colors.table.background,
      color: colors.table.text,
      borderCollapse: 'collapse',
      padding: 0,
    }),
    thead: css(names.thead, {
      backgroundColor: colors.head.background,
    }),
    tbody: css(names.tbody, {
      backgroundColor: colors.body.background,
    }),
    td: css(names.td, {
      paddingTop: rem(1.4),
      paddingBottom: rem(1.4),
    }),
    tr: css(names.tr, {
      borderTop: `${colors.row.border} ${rem(0.2)} solid`,
      borderBottom: `${colors.row.border} ${rem(0.2)} solid`,
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
    th: css(names.th,
      sizes.caption, weights.regular, {
      textAlign: 'left',
      paddingBottom: rem(0.6),
    }),
  };
}

function light(context: Context) {
  const { colors } = context;
  return base(context, {
    table: {
      background: colors.transparent,
      text: colors.light.gray02,
    },
    head: {
      background: colors.transparent,
    },
    body: {
      background: colors.light.gray14,
    },
    row: {
      border: colors.light.white,
    },
  });
}

function dark(context: Context) {
  const { colors } = context;
  return base(context, {
    table: {
      background: colors.transparent,
      text: colors.dark.gray02,
    },
    head: {
      background: colors.transparent,
    },
    body: {
      background: colors.dark.gray14,
    },
    row: {
      border: colors.dark.black,
    },
  });
}

function highContrast(context: Context) {
  const { colors } = context;
  return base(context, {
    table: {
      background: colors.transparent,
      text: colors.highContrast.white,
    },
    head: {
      background: colors.transparent,
    },
    body: {
      background: colors.transparent,
    },
    row: {
      border: colors.highContrast.white,
    },
  });
}

export function table(context: Context) {
  return chooseStyle(context, light, dark, highContrast);
}
