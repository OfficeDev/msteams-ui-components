import { checkbox } from 'msteams-ui-styles-core/lib/components/checkbox';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';
import classes from '../utils/classes';
import uniqueId from '../utils/uniqueId';

export interface CheckboxProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  label?: string;
  checked?: boolean;
  onChecked?: (checked: boolean, value: any) => void;
}

interface CheckboxState {
  id: string;
}

interface CheckboxContext {
  onChecked?: (checked: boolean, value: any) => void;
  values?: any[];
  invalid: boolean;
}

type ConnectedProps = CheckboxProps & InjectedTeamsProps;

class CheckboxInner extends React.Component<ConnectedProps, CheckboxState> {
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
  context: CheckboxContext;

  state = { id: uniqueId('ts-cb-') };

  render() {
    const { id, required, name, context, className, style, value, checked, onChecked, label, ...rest } = this.props;

    const actuallyChecked = this.isChecked();
    const themeClassNames = checkbox(context);
    let checkboxClassNames = themeClassNames.checkbox;
    if (actuallyChecked) {
      checkboxClassNames = classes(themeClassNames.checkbox, themeClassNames.checkbox + '-checked');
    }

    return (
      <div
        className={classes(themeClassNames.container, className)}
        style={style}>
        <input
          aria-hidden="true"
          id={id}
          name={name}
          type="checkbox"
          className={themeClassNames.input}
          checked={actuallyChecked}
          value={value}
          readOnly/>
        <button
          id={this.state.id}
          role="checkbox"
          name={name}
          onMouseDown={(e) => e.preventDefault()}
          aria-required={required}
          aria-checked={actuallyChecked}
          className={checkboxClassNames}
          onClick={this.click}
          {...rest} />
        <label
          hidden={!label}
          htmlFor={this.state.id}
          className={themeClassNames.label}>
          {label}
        </label>
        {this.props.children}
      </div>
    );
  }

  private isChecked = (): boolean => {
    if (Array.isArray(this.context.values)) {
      return this.context.values.indexOf(this.props.value) >= 0;
    }
    return this.props.checked || false;
  }

  private click = (e: React.MouseEvent<HTMLButtonElement>) => {
    const checked = this.isChecked();
    if (this.context.onChecked) {
      this.context.onChecked(!checked, this.props.value);
    }
    if (this.props.onChecked) {
      this.props.onChecked(!checked, this.props.value);
    }

    return this.props.onClick && this.props.onClick(e);
  }
}

export const Checkbox = connectTeamsComponent(CheckboxInner);
