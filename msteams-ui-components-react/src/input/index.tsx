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
  state = { id: uniqueId('ts-i-') };

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
    const { name, context, style, className, label, onRef, errorLabel, id, ...rest } = this.props;
    const themeClassNames = input(context);
    const actualId = id || this.state.id;

    return (
      <div
        data-component-type="Input"
        style={style}
        className={classes(themeClassNames.container, className)}>
        {label || errorLabel ?
          <div>
            {label ?
              <label className={themeClassNames.label} htmlFor={actualId}>{label}</label> : null}
            {errorLabel ?
              <label className={themeClassNames.errorLabel}>{errorLabel}</label> : null}
          </div>
          : null}
        <input
          ref={(ref) => this.input = ref}
          className={themeClassNames.input}
          name={name}
          id={actualId}
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
