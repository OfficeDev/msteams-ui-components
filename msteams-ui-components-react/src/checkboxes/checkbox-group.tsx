import { checkboxGroup } from 'msteams-ui-styles-core/lib/components/checkbox-group';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { connectTeamsComponent } from '../teams-context/connect-teams-component';
import { InjectedTeamsProps } from '../teams-context/connected-component';
import add from '../utils/add';
import classes from '../utils/classes';
import remove from '../utils/remove';

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

  render() {
    const {context, className, onChecked, values, label, errorLabel, ...rest} = this.props;
    const themeClassNames = checkboxGroup(context);

    return (
      <div
        data-component-type="CheckboxGroup"
        className={classes(themeClassNames.container, className)}
        {...rest}>
        {label || errorLabel ?
          <div>
            {label ?
              <label className={themeClassNames.label}>{label}</label> : null}
            {errorLabel ?
              <label className={themeClassNames.errorLabel}>{errorLabel}</label> : null}
          </div>
          : null}
        {this.props.children}
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
