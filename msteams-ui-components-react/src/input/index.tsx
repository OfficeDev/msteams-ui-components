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

const InputInternal: React.StatelessComponent<InputProps & InjectedTeamsProps> = (props) => {
  const { context, className, label, errorLabel, id, ...rest } = props;
  const inputId = id ? id : uniqueId('input-');
  const themeClassNames = input(context);
  const containerClasses = [themeClassNames.container];
  if (errorLabel) {
    containerClasses.push(themeClassNames.errorIcon);
  }

  return (
    <div className={classes(containerClasses.join(' '), className)}>
      {label || errorLabel ?
        <div>
          {label ?
            <label
              className={themeClassNames.label}
              htmlFor={inputId}
            >
              {label}
            </label>
            :
            null
          }
          {errorLabel ?
            <label className={themeClassNames.errorLabel}>{errorLabel}</label>
            :
            null
          }
        </div>
        :
        null
      }
      <input className={themeClassNames.input} id={inputId} {...rest} />
    </div>
  );
};

export const Input = connectTeamsComponent(InputInternal);
