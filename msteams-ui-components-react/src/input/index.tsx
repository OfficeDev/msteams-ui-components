import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';
import uniqueId from '../utils/uniqueId';

export interface InputProps extends
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string;
}

const InputInternal: React.StatelessComponent<InputProps & InjectedTeamsProps> = (props) => {
  const { theme, className, label, id, ...rest } = props;
  const inputId = id ? id : uniqueId('input-');

  return (
    <div className={theme.input.container}>
      {label ? <label className={theme.input.label} htmlFor={inputId}>{label}</label> : null}
      <input className={[theme.input.input, className].join(' ')} id={inputId} {...rest} />
      <span className={theme.input.underline} />
    </div>
  );
};

export const Input = connectTeamsComponent(InputInternal);
