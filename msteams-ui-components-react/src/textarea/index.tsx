import { textArea } from 'msteams-ui-styles-core/dist/typestyle-binding/text-area';
import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';
import uniqueId from '../utils/uniqueId';

export interface TextAreaProps
  extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  label?: string;
}

const TextAreaInternal: React.StatelessComponent<TextAreaProps & InjectedTeamsProps> = (props) => {
  const { context, className, label, id, children, ...rest } = props;
  const textareaId = id ? id : uniqueId('textarea-');
  const themeClassNames = textArea(context);

  return (
    <div className={themeClassNames.container}>
      {label ? <label
        className={themeClassNames.label}
        htmlFor={textareaId}
      >
        {label}
      </label>
        :
        null
      }
      <textarea className={themeClassNames.textArea} id={textareaId} {...rest}>{children}</textarea>
    </div>
  );
};

export const TextArea = connectTeamsComponent(TextAreaInternal);
