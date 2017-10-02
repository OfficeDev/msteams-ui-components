import { checkbox } from 'msteams-ui-styles-core/dist/typestyle-binding/checkbox';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';
import classes from '../utils/classes';
import uniqueId from '../utils/uniqueId';

export interface CheckboxProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  onChecked?: (checked: boolean, value: any) => void;
  value: any;
  checked?: boolean;
  label?: string;
  disabled?: boolean;
}

interface CheckboxState {
  id: string;
}

interface CheckboxContext {
  onChecked?: (checked: boolean, value: any) => void;
  values?: any[];
}

class CheckboxInner extends React.Component<CheckboxProps & InjectedTeamsProps, CheckboxState> {
  static propTypes = {
    onChecked: PropTypes.func,
    value: PropTypes.any.isRequired,
    checked: PropTypes.bool,
    label: PropTypes.string,
  };

  static contextTypes = {
    onChecked: PropTypes.func,
    values: PropTypes.array,
  };

  constructor(props: CheckboxProps & InjectedTeamsProps, context: any) {
    super(props, context);
    this.handleCheck = this.handleCheck.bind(this);
    this.state = { id: uniqueId('ts-cb-') };
  }

  render() {
    const { context, disabled, className, onChecked, value, checked, label, ...rest } = this.props;

    const actuallyChecked = this.isChecked(this.props, this.context);
    const themeClassNames = checkbox(context);
    let checkboxClassNames = themeClassNames.checkbox;
    if (actuallyChecked) {
      checkboxClassNames = classes(themeClassNames.checkbox, themeClassNames.checkbox + '-checked');
    }

    return (
      <div
        className={classes(themeClassNames.container, className)}
        {...rest} >
        <button
          id={this.state.id}
          className={checkboxClassNames}
          disabled={disabled}
          onClick={() => this.handleCheck(!actuallyChecked)} />
        {this.props.label ?
          <label htmlFor={this.state.id} className={themeClassNames.label}>{this.props.label}</label> : null}
        {this.props.children}
      </div>
    );
  }

  private isChecked(props: CheckboxProps, context: CheckboxContext): boolean {
    if (Array.isArray(context.values)) {
      return context.values.indexOf(props.value) >= 0;
    }
    return props.checked || false;
  }

  private handleCheck(checked: boolean) {
    if (this.context.onChecked) {
      this.context.onChecked(checked, this.props.value);
    }
    if (this.props.onChecked) {
      this.props.onChecked(checked, this.props.value);
    }
  }
}

export const Checkbox = connectTeamsComponent(CheckboxInner);
