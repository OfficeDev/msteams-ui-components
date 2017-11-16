import { MSTeamsIcon, MSTeamsIconType, MSTeamsIconWeight } from 'msteams-ui-icons-react';
import { input } from 'msteams-ui-styles-core/lib/components/input';
import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';
import classes from '../utils/classes';
import uniqueId from '../utils/uniqueId';

export interface InputProps extends
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string;
  errorLabel?: string;
}

class InputInternal extends React.Component<InputProps & InjectedTeamsProps> {
  state = { id: uniqueId('ts-i-') };

  render() {
    const { name, context, style, className, label, errorLabel, id, ...rest } = this.props;
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
