import { checkboxGroup } from 'msteams-ui-styles-core/lib/components/checkbox-group';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { connectTeamsComponent } from '../teams-context/connect-teams-component';
import { InjectedTeamsProps } from '../teams-context/connected-component';
import add from '../utils/add';
import classes from '../utils/classes';
import remove from '../utils/remove';
import uniqueId from '../utils/uniqueId';

export interface CheckboxGroupProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  label?: string;
  errorLabel?: string;
  onChecked?: (values: any[]) => void;
  values?: any[];
}

class CheckboxGroupInner extends React.Component<CheckboxGroupProps & InjectedTeamsProps> {
  static childContextTypes = {
    onChecked: PropTypes.func,
    values: PropTypes.array,
  };

  static propTypes = {
    onChecked: PropTypes.func,
    values: PropTypes.array,
  };

  state = {
    groupId: uniqueId('ts-cg-'),
  };

  render() {
    const {
      context, className, onChecked,
      values, label, errorLabel, children,
       ...rest} = this.props;
    const themeClassNames = checkboxGroup(context);
    const actualId = this.state.groupId;

    return (
      <div {...rest}>
        <label
          hidden={!!label}
          tabIndex={-1}
          className={themeClassNames.label}
          htmlFor={actualId}>{label}</label>
        <label
          hidden={!!errorLabel}
          aria-live="polite"
          tabIndex={-1}
          className={themeClassNames.errorLabel}
          htmlFor={actualId}>{errorLabel}</label>
        <div
          id={actualId}
          role="group"
          className={classes(themeClassNames.container, className)}
          aria-invalid={!!errorLabel}>
          {children}</div>
      </div>
    );
  }

  // tslint:disable-next-line:no-unused-variable
  private getChildContext() {
    return {
      onChecked: this.handleChange,
      values: this.props.values,
    };
  }

  private handleChange = (checked: boolean, value: any) => {
    if (this.props.onChecked) {
      let values = Array.isArray(this.props.values) ? this.props.values : [];
      values = checked ? add(values, value) : remove(values, value);
      this.props.onChecked(values);
    }
  }
}

export const CheckboxGroup = connectTeamsComponent(CheckboxGroupInner);
