import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';
import classes from '../utils/classes';

export interface TextAreaProps
  extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> { }

const TextAreaInternal: React.StatelessComponent<TextAreaProps & InjectedTeamsProps> = (props) => {
  const { theme, className, children, ...rest } = props;
  return (
    <div className={theme.textarea.container}>
      <textarea className={classes(theme.textarea.textarea, className)} {...rest}>{children}</textarea>
      <span className={theme.textarea.underline}></span>
    </div>
  );
};

export const TextArea = connectTeamsComponent(TextAreaInternal);
