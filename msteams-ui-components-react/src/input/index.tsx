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
    const { context, style, className, label, errorLabel, id, ...rest } = this.props;
    const themeClassNames = input(context);

    return (
      <div
        data-component-type="Input"
        style={style}
        className={classes(themeClassNames.container, errorLabel ? themeClassNames.errorIcon : null, className)}>
        {label || errorLabel ?
          <div>
            {label ?
              <label className={themeClassNames.label} htmlFor={this.state.id}>{label}</label> : null}
            {errorLabel ?
              <label className={themeClassNames.errorLabel}>{errorLabel}</label> : null}
          </div>
          : null}
        <input className={themeClassNames.input} id={this.state.id} {...rest} />
      </div>
    );
  }
}

export const Input = connectTeamsComponent(InputInternal);
