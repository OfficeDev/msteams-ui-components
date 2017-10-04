import { input } from 'msteams-ui-styles-core/lib/components/input';
import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';
import classes from '../utils/classes';
import uniqueId from '../utils/uniqueId';

export interface InputProps extends
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string;
  containerClassName?: string;
}

const InputInternal: React.StatelessComponent<InputProps & InjectedTeamsProps> = (props) => {
  const { context, containerClassName, className, label, id, ...rest } = props;
  const inputId = id ? id : uniqueId('input-');
  const themeClassNames = input(context);

  return (
    <div className={classes(themeClassNames.container, containerClassName)}>
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
      <input className={classes(themeClassNames.input, className)} id={inputId} {...rest} />
    </div>
  );
};

export const Input = connectTeamsComponent(InputInternal);
