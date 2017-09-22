import * as PropTypes from 'prop-types';
import * as React from 'react';
import { CSSProperties } from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';
import uniqueId from '../utils/uniqueId';

export interface CheckboxProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  onChecked?: (checked: boolean, value: any) => void;
  value: any;
  checked?: boolean;
  label?: string;
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
    const checked = this.checked(this.props, this.context);
    let boxClassName: string | undefined;
    let labelClassName: string | undefined;
    if (this.props.theme) {
      boxClassName = this.props.theme.checkbox.unchecked;
      if (checked) {
        boxClassName += ' ' + this.props.theme.checkbox.checked;
      }
      labelClassName = this.props.theme.checkbox.label;
    }

    const divProps = { ...this.props };
    delete divProps.theme;
    delete divProps.onChecked;
    delete divProps.value;
    delete divProps.checked;
    delete divProps.label;

    return (
      <div {...divProps}>
        <input
          id={this.state.id}
          type="checkbox"
          value={this.props.value}
          checked={checked}
          onChange={() => null}
          hidden />
        <button
          onClick={() => this.handleCheck(!checked)}
          className={boxClassName} />
        {this.props.label ? <label htmlFor={this.state.id} className={labelClassName}>{this.props.label}</label> : null}
        {this.props.children}
      </div>
    );
  }

  private checked(props: CheckboxProps, context: CheckboxContext): boolean {
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
