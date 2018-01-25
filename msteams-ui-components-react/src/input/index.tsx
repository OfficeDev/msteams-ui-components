import { MSTeamsIcon, MSTeamsIconType, MSTeamsIconWeight } from 'msteams-ui-icons-react';
import { input } from 'msteams-ui-styles-core/lib/components/input';
import * as React from 'react';
import { Focusable } from '../focusable';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';
import classes from '../utils/classes';
import uniqueId from '../utils/uniqueId';

export interface InputProps extends
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  onRef?: (ref: React.Component & Focusable | null) => void;
  label?: string;
  errorLabel?: string;
}

class InputInternal extends React.Component<InputProps & InjectedTeamsProps>
implements Focusable {
  state = {
    inputId: uniqueId('ts-i'),
  };

  private input: HTMLInputElement | null;

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
    if (this.input) {
      this.input.focus();
    }
  }

  render() {
    const {
      name, context, style,
      className, label, onRef,
      id, errorLabel, required,
      ...rest } = this.props;
    const themeClassNames = input(context);
    const actualId = id || this.state.inputId;

    return (
      <div
        style={style}
        className={classes(themeClassNames.container, className)}>
        <label
          hidden={!!label}
          tabIndex={-1}
          className={themeClassNames.label}
          htmlFor={actualId}>{label}</label>
        <label
          hidden={!!errorLabel}
          aria-live="polite"
          tabIndex={-1}
          className={themeClassNames.errorLabel}
          htmlFor={actualId}>{errorLabel}</label>
        <input
          id={actualId}
          ref={(ref) => this.input = ref}
          role="textbox"
          aria-multiline="false"
          aria-invalid={!!errorLabel}
          aria-required={required}
          required={required}
          className={themeClassNames.input}
          name={name}
          {...rest} />
        {errorLabel ?
          <MSTeamsIcon
            className={themeClassNames.errorIcon}
            iconType={MSTeamsIconType.FieldError}
            iconWeight={MSTeamsIconWeight.Light} /> : null}
      </div>
    );
  }
}

export const Input = connectTeamsComponent(InputInternal);
