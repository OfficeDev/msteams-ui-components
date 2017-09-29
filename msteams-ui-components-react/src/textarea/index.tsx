import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';
import classes from '../utils/classes';
import uniqueId from '../utils/uniqueId';

export interface TextAreaProps
  extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  label?: string;
}

const TextAreaInternal: React.StatelessComponent<TextAreaProps & InjectedTeamsProps> = (props) => {
  const { theme, className, label, id, children, ...rest } = props;
  const textareaId = id ? id : uniqueId('textarea-');

  return (
    <div className={theme.textarea.container}>
      {label ? <label className={theme.textarea.label} htmlFor={textareaId}>{label}</label> : null}
      <textarea className={classes(theme.textarea.textarea, className)} id={textareaId} {...rest}>{children}</textarea>
      <span className={theme.textarea.underline}></span>
    </div>
  );
};

export const TextArea = connectTeamsComponent(TextAreaInternal);
