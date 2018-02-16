import { primaryButton } from 'msteams-ui-styles-core/lib/components/primary-button';
import * as React from 'react';
import { IFocusable } from '../focusable';
import { IInjectedTeamsProps } from '../index';
import { connectTeamsComponent } from '../teams-context';
import classes from '../utils/classes';

export interface IPrimaryButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  onRef?: (ref: React.Component & IFocusable | null) => void;
}

class PrimaryButtonView
  extends React.Component<IPrimaryButtonProps & IInjectedTeamsProps>
  implements IFocusable {
  private button: HTMLButtonElement | null;

  componentDidMount() {
    if (this.props.onRef) {
      this.props.onRef(this);
    }
  }

  componentWillUnmount() {
    if (this.props.onRef) {
      this.props.onRef(null);
    }
  }

  focus() {
    if (this.button) {
      this.button.focus();
    }
  }

  render() {
    const { context, className, children, onRef, ...rest } = this.props;
    const themeClassName = primaryButton(context);

    return <button
      ref={(ref) => this.button = ref}
      role="button"
      onMouseDown={(e) => e.preventDefault()}
      className={classes(themeClassName, className)}
      {...rest}
    >{children}</button>;
  }
}

export const PrimaryButton = connectTeamsComponent(PrimaryButtonView);
