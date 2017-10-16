import { textArea } from 'msteams-ui-styles-core/lib/components/text-area';
import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';
import classes from '../utils/classes';
import uniqueId from '../utils/uniqueId';

export interface TextAreaProps
  extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  label?: string;
  errorLabel?: string;
}

class TextAreaInternal extends React.Component<TextAreaProps & InjectedTeamsProps> {
  state = { id: uniqueId('ts-ta-') };

  render() {
    const { context, style, className, label, errorLabel, id, children, ...rest } = this.props;
    const themeClassNames = textArea(context);

    return (
      <div style={style}
        className={classes(themeClassNames.container, errorLabel ? themeClassNames.errorIcon : null, className)}>
        {label || errorLabel ?
          <div>
          {label ?
            <label className={themeClassNames.label} htmlFor={this.state.id}>{label}</label> : null}
          {errorLabel ?
            <label className={themeClassNames.errorLabel}>{errorLabel}</label> : null}
        </div>
        : null}
        <textarea className={themeClassNames.textArea} id={this.state.id} {...rest}>{children}</textarea>
      </div>
    );
  }
}

export const TextArea = connectTeamsComponent(TextAreaInternal);
