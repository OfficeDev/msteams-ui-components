import * as PropTypes from 'prop-types';
import * as React from 'react';
import { CSSProperties } from 'react';
import { Theme } from 'teams-styles-core';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';
import uniqueId from '../utils/uniqueId';

interface CheckboxProps {
  onChange?: (checked: boolean, value: any) => void;
  value: any;
  checked?: boolean;
  label?: string;
  theme?: Theme;
}

interface CheckboxState {
  id: string;
  checked: boolean;
  boxProps: {
    className?: string;
  };
  labelProps: {
    className?: string;
  };
}

interface CheckboxContext {
  onChange?: (checked: boolean, value: any) => void;
  values?: any[];
}

class CheckboxInner extends React.Component<CheckboxProps, CheckboxState> {
  static propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.any.isRequired,
    checked: PropTypes.bool,
    label: PropTypes.string,
  };

  static contextTypes = {
    onChange: PropTypes.func,
    values: PropTypes.array,
  };

  constructor(props: CheckboxProps, context: any) {
    super(props, context);
    this.handleCheck = this.handleCheck.bind(this);

    const checked = this.checked(this.props, this.context);
    const state: CheckboxState = {
      id: uniqueId('ts-cb-'),
      checked,
      boxProps: {},
      labelProps: {},
    };

    if (this.props.theme) {
      state.boxProps.className = this.props.theme.checkbox.box;
      if (checked) {
        state.boxProps.className = this.props.theme.checkbox.checkedBox;
      }
      state.labelProps.className = this.props.theme.checkbox.label;
    }
    this.state = state;
  }

  componentWillReceiveProps(nextProps: CheckboxProps, nextContext: any) {
    const checked = this.checked(nextProps, nextContext);
    let boxClassName = nextProps.theme ? nextProps.theme.checkbox.box : undefined;
    const labelClassName = nextProps.theme ? nextProps.theme.checkbox.label : undefined;

    if (checked) {
      boxClassName = nextProps.theme && nextProps.theme.checkbox.checkedBox;
    }

    if (checked !== this.state.checked ||
      boxClassName !== this.state.boxProps.className ||
      labelClassName !== this.state.labelProps.className) {
      const boxProps = {...this.state.boxProps, className: boxClassName};
      const labelProps = {...this.state.labelProps, className: labelClassName};
      const state = {...this.state, boxProps, labelProps, checked};
      this.setState(state);
    }
  }

  render() {
    return (
      <div>
        <input
          id={this.state.id}
          type="checkbox"
          value={this.props.value}
          checked={this.state.checked}
          hidden />
        <button
          onClick={() => this.handleCheck(!this.state.checked)}
          {...this.state.boxProps} />
        {this.props.label ? <label htmlFor={this.state.id} {...this.state.labelProps}>{this.props.label}</label> : null}
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
    if (this.context.onChange) {
      this.context.onChange(checked, this.props.value);
    }
    if (this.props.onChange) {
      this.props.onChange(checked, this.props.value);
    }
  }
}

export const Checkbox = connectTeamsComponent(CheckboxInner as any);
