import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';

export interface InputProps extends
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> { }

const InputInternal: React.StatelessComponent<InputProps & InjectedTeamsProps> = (props) => {
  const { theme, className, ...rest } = props;
  return (
    <div className={theme.input.container}>
      <input className={[theme.input.input, className].join(' ')} {...rest} />
      <span className={theme.input.underline} />
    </div>
  );
};

export const Input = connectTeamsComponent(InputInternal);
