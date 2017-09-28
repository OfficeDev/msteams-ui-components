import { style } from 'typestyle';
import { Context } from '../raw/context';
import { textarea as textareaRaw } from '../raw/textarea';

export function textarea(c: Context) {
  const raw = textareaRaw(c);
  const textareaClass = style(raw.normal);
  return {
    container: style(raw.container),
    textarea: textareaClass,
    underline: style(raw.underline, {
      $nest: {
        [`.${textareaClass}:focus + &`]: raw.focusUnderline,
      },
    }),
  };
}
