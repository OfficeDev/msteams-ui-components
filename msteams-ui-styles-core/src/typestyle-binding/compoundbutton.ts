import { style } from 'typestyle';
import { compoundbutton as compoundbuttonRaw } from '../raw/compoundbutton';
import { Context } from '../raw/context';

export function compoundbutton(c: Context) {
  const raw = compoundbuttonRaw(c);
  return {
    container: style(raw.container.normal, {
      $nest: {
        '&:hover:enabled': raw.container.hover,
        '&:focus': raw.container.focus,
        '&:active': raw.container.active,
        '&:disabled': raw.container.disabled,
      },
    }),
    icon: style(raw.icon.normal),
    primaryText: style(raw.primaryText.normal),
    secondaryText: style(raw.secondaryText.normal),
  };
}
