import { MSTeamsIcon, MSTeamsIconType, MSTeamsIconWeight } from 'msteams-ui-icons-react';
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
    const { name, context, style, className, label, errorLabel, id, children, ...rest } = this.props;
    const themeClassNames = textArea(context);
    const actualId = id || this.state.id;

    return (
      <div
        data-component-type="TextArea"
        style={style}
        className={classes(themeClassNames.container, className)}>
        {label || errorLabel ?
          <div>
          {label ?
            <label className={themeClassNames.label} htmlFor={actualId}>{label}</label> : null}
          {errorLabel ?
            <label className={themeClassNames.errorLabel}>{errorLabel}</label> : null}
        </div>
        : null}
        <textarea
          className={themeClassNames.textArea}
          name={name}
          id={actualId}
          {...rest}>{children}</textarea>
        {errorLabel ?
          <MSTeamsIcon
            className={themeClassNames.errorIcon}
            iconType={MSTeamsIconType.FieldError}
            iconWeight={MSTeamsIconWeight.Light} /> : null}
      </div>
    );
  }
}

export const TextArea = connectTeamsComponent(TextAreaInternal);
