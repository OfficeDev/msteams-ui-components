import 'mousetrap';
import { MSTeamsIcon, MSTeamsIconType, MSTeamsIconWeight } from 'msteams-ui-icons-react';
import { dropdown } from 'msteams-ui-styles-core/lib/components/dropdown';
import * as React from 'react';
import { Focusable } from '../focusable';
import { Context } from '../index';
import classes from '../utils/classes';
import uniqueId from '../utils/uniqueId';

export interface DropdownItemProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    context: Context;
    text?: string;
    render?: () => string | JSX.Element;
}

export class DropdownItem extends React.Component<DropdownItemProps>
  implements Focusable {
  private button: HTMLButtonElement | null;

  hasFocus = (): boolean => {
    return !!this.button && this.button === document.activeElement;
  }

  focus = () => {
    if (this.button) {
      this.button.focus();
    }
  }

  render() {
    const { context, render, text, ...rest } = this.props;
    if ((render && text) || (! render && ! text)) {
      throw new Error('DropdownItem needs to have at one and only one of text and render property.');
    }

    const themeClassNames = dropdown(context);

    return <button
      tabIndex={-1}
      className={themeClassNames.item}
      ref={(ref) => this.button = ref}
      {...rest}
    >
      {text ? text : null}
      {render ? render() : null}
    </button>;
  }
}
