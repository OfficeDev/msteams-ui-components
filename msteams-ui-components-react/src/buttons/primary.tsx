import { primaryButton } from 'msteams-ui-styles-core/lib/components/primary-button';
import * as React from 'react';
import { Focusable } from '../focusable';
import { InjectedTeamsProps } from '../index';
import { connectTeamsComponent } from '../teams-context';
import classes from '../utils/classes';

export interface PrimaryButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  onRef?: (ref: React.Component & Focusable | null) => void;
}

class PrimaryButtonView
  extends React.Component<PrimaryButtonProps & InjectedTeamsProps>
  implements Focusable {
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
      className={classes(themeClassName, className)}
      {...rest}
    >{children}</button>;
  }
}

export const PrimaryButton = connectTeamsComponent(PrimaryButtonView);
