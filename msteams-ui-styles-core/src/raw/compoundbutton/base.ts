import { Context } from '../context';
import { font } from '../typography/fonts/font';
import { size } from '../typography/sizes/size';
import { CompoundButtonColors } from './compoundbutton-colors';
import { CompoundButtonStyles } from './compoundbutton-styles';

export function base(c: Context, colors: CompoundButtonColors): CompoundButtonStyles {
  const fonts = font(c);
  const sizes = size(c);
  return {
    container: {
      normal: {
        minWidth: c.rem(4.8),
        minHeight: c.rem(4.8),
        display: 'flex',
        alignItems: 'center',
        padding: 0,
        border: `${c.rem(0.2)} solid`,
        borderColor: colors.normal.border,
        borderRadius: c.rem(0.3),
        background: colors.normal.background,
        color: colors.normal.text,
      },
      hover: {
        background: colors.hover.background,
        color: colors.hover.text,
      },
      active: {
        background: colors.hover.background,
        color: colors.hover.text,
      },
      focus: {
        color: colors.focus.text,
        borderColor: colors.focus.border,
        background: colors.focus.background,
        outline: `${c.rem(0.2)} solid ${colors.focus.outline}`,
        outlineOffset: `-${c.rem(0.5)}`,
      },
      disabled: {
        cursor: 'not-allowed',
        background: colors.disabled.background,
        color: colors.disabled.text,
        borderColor: colors.disabled.border,
      },
    },
    icon: {
      normal: {
        width: c.rem(4.8),
        height: c.rem(4.8),
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      },
    },
    primaryText: {
      normal: {
        ...fonts.semibold,
        ...sizes.base,
        textAlign: 'left',
        paddingLeft: c.rem(1.2),
        paddingRight: c.rem(1.2),
      },
    },
    secondaryText: {
      normal: {
        ...fonts.regular,
        ...sizes.caption,
        textAlign: 'left',
        paddingLeft: c.rem(1.2),
        paddingRight: c.rem(1.2),
      },
    },
  };
}
