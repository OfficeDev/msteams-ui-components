import { radioButtonGroup } from 'msteams-ui-styles-core/lib/components/radio-button-group';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { connectTeamsComponent } from '../teams-context/connect-teams-component';
import { InjectedTeamsProps } from '../teams-context/connected-component';
import classes from '../utils/classes';

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

  render() {
    const {context, className, onSelected, value, label, errorLabel, ...rest} = this.props;
    const themeClassNames = radioButtonGroup(context);

    return (
      <div
        data-component-type="RadioButtonGroup"
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
