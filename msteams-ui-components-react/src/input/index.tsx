import { input } from 'msteams-ui-styles-core/lib/components/input';
import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';
import uniqueId from '../utils/uniqueId';

export interface InputProps extends
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string;
}

const InputInternal: React.StatelessComponent<InputProps & InjectedTeamsProps> = (props) => {
  const { context, className, label, id, ...rest } = props;
  const inputId = id ? id : uniqueId('input-');
  const themeClassNames = input(context);

  return (
    <div className={themeClassNames.container}>
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
      <input className={themeClassNames.input} id={inputId} {...rest} />
    </div>
  );
};

export const Input = connectTeamsComponent(InputInternal);
