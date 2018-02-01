import { MSTeamsIcon, MSTeamsIconType, MSTeamsIconWeight } from 'msteams-ui-icons-react';
import { textArea } from 'msteams-ui-styles-core/lib/components/text-area';
import * as React from 'react';
import { Focusable } from '../focusable';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';
import classes from '../utils/classes';
import uniqueId from '../utils/uniqueId';

export interface TextAreaProps
  extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  onRef?: (ref: React.Component & Focusable | null) => void;
  label?: string;
  errorLabel?: string;
}

class TextAreaInternal extends React.Component<TextAreaProps & InjectedTeamsProps> implements Focusable {
  state = {
    inputId: uniqueId('ts-ta'),
    labelId: uniqueId('ts-ta-l'),
    errorLabelId: uniqueId('ts-ta-e'),
  };

  private textarea: HTMLTextAreaElement | null;

  componentDidMount() {
    if (this.props.onRef) {
      this.props.onRef(this);
    }
  }

  componentWillUnmount() {
    if (this.props.onRef) {
      this.props.onRef(null);
    }
  }

  focus() {
    if (this.textarea) {
      this.textarea.focus();
    }
  }

  render() {
    const {
      name, context, style,
      className, label, errorLabel,
      id, children, required,
      ...rest } = this.props;
    const themeClassNames = textArea(context);
    const actualId = id || this.state.inputId;

    return (
      <div
        style={style}
        className={classes(themeClassNames.container, className)}>
        <label
          className={themeClassNames.labelContainer}
          aria-live="assertive"
          tabIndex={-1}
          htmlFor={actualId}>
          <span hidden={!!label} className={themeClassNames.label}>{label}</span>
          <span hidden={!!errorLabel} className={themeClassNames.errorLabel}>{errorLabel}</span>
        </label>
        <textarea
          id={actualId}
          ref={(ref) => this.textarea = ref}
          role="textbox"
          aria-multiline="true"
          aria-invalid={!!errorLabel}
          aria-required={required}
          required={required}
          className={themeClassNames.textArea}
          name={name}
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
