import { MSTeamsIcon, MSTeamsIconType, MSTeamsIconWeight } from 'msteams-ui-icons-react';
import { input } from 'msteams-ui-styles-core/lib/components/input';
import * as React from 'react';
import { IFocusable } from '../focusable';
import { connectTeamsComponent, IInjectedTeamsProps } from '../index';
import classes from '../utils/classes';
import uniqueId from '../utils/uniqueId';

export interface IInputProps extends
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  onRef?: (ref: React.Component & IFocusable | null) => void;
  label?: string;
  errorLabel?: string;
}

class InputInternal extends React.Component<IInputProps & IInjectedTeamsProps>
implements IFocusable {
  state = {
    inputId: uniqueId('ts-i'),
  };

  private input: HTMLInputElement | null = null;

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
          htmlFor={actualId}>
          <span hidden={!!label} className={themeClassNames.label}>{label}</span>
          <span hidden={!!errorLabel} className={themeClassNames.errorLabel}>{errorLabel}</span>
        </label>
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
