import { checkboxGroup } from 'msteams-ui-styles-core/lib/components/checkbox-group';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { connectTeamsComponent, ITeamsThemeContextProps } from '../teams-context';
import add from '../utils/add';
import classes from '../utils/classes';
import remove from '../utils/remove';
import uniqueId from '../utils/uniqueId';

export interface ICheckboxGroupProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  label?: string;
  errorLabel?: string;
  onChecked?: (values: any[]) => void;
  values?: any[];
}

class CheckboxGroupInner extends React.Component<ICheckboxGroupProps & ITeamsThemeContextProps> {
  static childContextTypes = {
    onChecked: PropTypes.func,
    values: PropTypes.array,
  };

  static propTypes = {
    onChecked: PropTypes.func,
    values: PropTypes.array,
  };

  state = {
    labelId: uniqueId('ts-rgl'),
    groupId: uniqueId('ts-cg-'),
  };

  render() {
    const {
      context, className, onChecked,
      values, label, errorLabel, children,
       ...rest} = this.props;
    const themeClassNames = checkboxGroup(context);
    const actualId = this.state.groupId;

    const hasLabel = !!label;
    const hasError = !!errorLabel;

    return (
      <div {...rest}>
        <label
          id={this.state.labelId}
          aria-live="polite">
          {hasLabel ? <span className={themeClassNames.label}>{label}</span> : null}
          {hasError ? <span className={themeClassNames.errorLabel}>{errorLabel}</span> : null}
        </label>
        <div
          id={actualId}
          role="group"
          aria-labelledby={this.state.labelId}
          className={classes(themeClassNames.container, className)}
          aria-invalid={hasError}>
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
