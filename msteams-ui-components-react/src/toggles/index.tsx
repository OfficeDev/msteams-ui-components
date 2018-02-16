import { toggle } from 'msteams-ui-styles-core/lib/components/toggle';
import * as React from 'react';
import { IFocusable } from '../focusable';
import { connectTeamsComponent, IInjectedTeamsProps } from '../index';
import classes from '../utils/classes';

export interface IToggleProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  onRef?: (ref: React.Component & IFocusable | null) => void;
  checked: boolean;
  onToggle: (checked: boolean) => void;
}

class ToggleView extends React.Component<IToggleProps & IInjectedTeamsProps>
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
    const { context, required, checked, className, children, onRef, name, value, ...rest } = this.props;
    const themeClassNames = toggle(context);

    return (
      <div className={themeClassNames.container}>
        <input
          aria-hidden="true"
          type="checkbox"
          name={name}
          value={value}
          checked={checked}
          className={themeClassNames.input} />
        <button
          ref={(ref) => this.button = ref}
          role="button"
          aria-required={required}
          aria-pressed={checked}
          onMouseDown={(e) => e.preventDefault()}
          onClick={this.click}
          className={classes(themeClassNames.slider, className)}
          {...rest}>{children}</button>
      </div>
    );
  }

  private click = (e: React.MouseEvent<HTMLButtonElement>) => {
    this.props.onToggle(!this.props.checked);
  }
}

export const Toggle = connectTeamsComponent(ToggleView);
