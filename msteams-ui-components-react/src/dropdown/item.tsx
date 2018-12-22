import 'mousetrap';
import { dropdown } from 'msteams-ui-styles-core/lib/components/dropdown';
import * as React from 'react';
import { IFocusable } from '../focusable';
import { IContext } from '../index';

export interface IDropdownItemProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    context: IContext;
    text?: string;
    render?: () => string | JSX.Element;
}

export class DropdownItem extends React.Component<IDropdownItemProps>
  implements IFocusable {
  private button: HTMLButtonElement | null = null;

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
