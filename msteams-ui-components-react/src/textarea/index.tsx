import { textArea } from 'msteams-ui-styles-core/lib/components/text-area';
import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';
import classes from '../utils/classes';
import uniqueId from '../utils/uniqueId';

export interface TextAreaProps
  extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  label?: string;
  containerClassName?: string;
}

const TextAreaInternal: React.StatelessComponent<TextAreaProps & InjectedTeamsProps> = (props) => {
  const { context, containerClassName, className, label, id, children, ...rest } = props;
  const textareaId = id ? id : uniqueId('textarea-');
  const themeClassNames = textArea(context);

  return (
    <div className={classes(themeClassNames.container, containerClassName)}>
      {label ?
        <label
          className={themeClassNames.label}
          htmlFor={textareaId}
        >
          {label}
        </label>
        :
        null
      }
      <textarea className={classes(themeClassNames.textArea, className)} id={textareaId} {...rest}>{children}</textarea>
    </div>
  );
};

export const TextArea = connectTeamsComponent(TextAreaInternal);
