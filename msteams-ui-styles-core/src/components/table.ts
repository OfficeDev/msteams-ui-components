import { chooseStyle, IContext } from '../context';

interface ITableColors {
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

function base(c: IContext, colors: ITableColors) {
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
      display: 'flex',
      flexFlow: 'column nowrap',
      justifyContent: 'space-between',
      backgroundColor: colors.table.background,
      color: colors.table.text,
      borderCollapse: 'collapse',
      padding: 0,
    }),
    thead: css(names.thead, {
      display: 'flex',
      flexFlow: 'column nowrap',
      flex: '1 1 auto',
      backgroundColor: colors.head.background,
    }),
    tbody: css(names.tbody, {
      display: 'flex',
      flexFlow: 'column nowrap',
      flex: '1 1 auto',
      backgroundColor: colors.body.background,
    }),
    tr: css(names.tr, {
      flex: '1 1 auto',
      overflow: 'hidden',
      display: 'flex',
      borderBottom: `${colors.row.border} ${rem(0.2)} solid`,
      $nest: {
        '&:last-child': {
          borderBottom: 0,
        },
      },
    }),
    th: css(names.th, sizes.caption, weights.regular, {
      textAlign: 'left',
      display: 'flex',
      flexFlow: 'row nowrap',
      flex: '1 1 auto',
      overflow: 'hidden',
      paddingLeft: rem(1.6),
      paddingRight: rem(1.6),
      paddingTop: rem(1.4),
      paddingBottom: rem(0.6),
      $nest: {
        '&:last-child': {
          paddingLeft: 0,
        },
      },
    }),
    td: css(names.td, {
      display: 'flex',
      flexFlow: 'row nowrap',
      flex: '1 1 auto',
      overflow: 'hidden',
      paddingLeft: rem(1.6),
      paddingRight: rem(1.6),
      paddingTop: rem(1.4),
      paddingBottom: rem(1.4),
      $nest: {
        '&:last-child': {
          paddingLeft: 0,
        },
      },
    }),
  };
}

function light(context: IContext) {
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

function dark(context: IContext) {
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

function highContrast(context: IContext) {
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

export function table(context: IContext) {
  return chooseStyle(context, light, dark, highContrast);
}
