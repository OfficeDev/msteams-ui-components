import { radioButtonGroup } from 'msteams-ui-styles-core/lib/components/radio-button-group';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { connectTeamsComponent } from '../teams-context/connect-teams-component';
import { InjectedTeamsProps } from '../teams-context/connected-component';
import classes from '../utils/classes';
import uniqueId from '../utils/uniqueId';

export interface RadiobuttonGroupProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  label?: string;
  errorLabel?: string;
  onSelected?: (value: any) => void;
  value?: any;
}

class RadiobuttonGroupInner extends React.Component<RadiobuttonGroupProps & InjectedTeamsProps> {
  static childContextTypes = {
    onSelected: PropTypes.func,
    value: PropTypes.any,
  };

  static propTypes = {
    onSelected: PropTypes.func,
    value: PropTypes.any,
  };

  state = {
    groupId: uniqueId('ts-rg'),
  };

  render() {
    const {
      context, children, className,
      onSelected, value, label, errorLabel,
      ...rest } = this.props;
    const themeClassNames = radioButtonGroup(context);
    const actualId = this.state.groupId;

    return (
      <div {...rest}>
        <label
          aria-live="assertive"
          tabIndex={-1}
          htmlFor={actualId}>
          <span hidden={!!label} className={themeClassNames.label}>{label}</span>
          <span hidden={!!errorLabel} className={themeClassNames.errorLabel}>{errorLabel}</span>
        </label>
        <div
          id={actualId}
          role="radiogroup"
          className={classes(themeClassNames.container, className)}
          aria-invalid={!!errorLabel}>
          {children}</div>
      </div>
    );
  }

  // tslint:disable-next-line:no-unused-variable
  private getChildContext() {
    return {
      onSelected: this.handleChange,
      value: this.props.value,
    };
  }

  private handleChange = (selected: boolean, value: any) => {
    if (selected && this.props.onSelected) {
      this.props.onSelected(value);
    }
  }
}

export const RadiobuttonGroup = connectTeamsComponent(RadiobuttonGroupInner);
