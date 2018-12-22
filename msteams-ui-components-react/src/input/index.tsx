import { MSTeamsIcon, MSTeamsIconType, MSTeamsIconWeight } from 'msteams-ui-icons-react';
import { input } from 'msteams-ui-styles-core/lib/components/input';
import * as React from 'react';
import { IFocusable } from '../focusable';
import { connectTeamsComponent, ITeamsThemeContextProps } from '../teams-context';
import classes from '../utils/classes';
import uniqueId from '../utils/uniqueId';

export interface IInputProps extends
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  onRef?: (ref: React.Component & IFocusable | null) => void;
  label?: string;
  errorLabel?: string;
  status?: 'updating' | 'updated';
}

class InputInternal extends React.Component<IInputProps & ITeamsThemeContextProps>
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
      status,
      ...rest } = this.props;
    const themeClassNames = input(context);
    const actualId = id || this.state.inputId;

    const hasLabel = !!label;
    const hasError = !!errorLabel;

    return (
      <div
        style={style}
        className={classes(themeClassNames.container, className)}>
        <label
          htmlFor={actualId}>
          {hasLabel ? <span className={themeClassNames.label}>{label}</span> : null}
          {hasError ? <span className={themeClassNames.errorLabel}>{errorLabel}</span> : null}
        </label>
        <input
          id={actualId}
          ref={(ref) => this.input = ref}
          role="textbox"
          aria-multiline="false"
          aria-invalid={hasError}
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
        {status === 'updated' ?
          <MSTeamsIcon
            className={themeClassNames.successIcon}
            iconType={MSTeamsIconType.FieldSuccess}
            iconWeight={MSTeamsIconWeight.Light} /> : null}
        {status === 'updating' ? <span className={themeClassNames.spinner} /> : null}
      </div>
    );
  }
}

export const Input = connectTeamsComponent(InputInternal);
