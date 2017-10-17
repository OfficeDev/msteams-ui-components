import { checkboxGroup } from 'msteams-ui-styles-core/lib/components/checkbox-group';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../teams-context/connect-teams-component';
import add from '../utils/add';
import remove from '../utils/remove';

export interface CheckboxGroupProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  label?: string;
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
    const {context, onChecked, values, label, ...rest} = this.props;
    const themeClassNames = checkboxGroup(context);

    return (
      <div {...rest}>
        {label ?
          <label className={themeClassNames.label}>{label}</label>
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
