import { checkbox } from 'msteams-ui-styles-core/lib/components/checkbox';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { connectTeamsComponent, IInjectedTeamsProps } from '../index';
import classes from '../utils/classes';
import uniqueId from '../utils/uniqueId';

export interface ICheckboxProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string;
  checked?: boolean;
  onChecked?: (checked: boolean, value: any) => void;
}

interface ICheckboxState {
  id: string;
}

interface ICheckboxContext {
  onChecked?: (checked: boolean, value: any) => void;
  values?: any[];
}

type ConnectedProps = ICheckboxProps & IInjectedTeamsProps;

class CheckboxInner extends React.Component<ConnectedProps, ICheckboxState> {
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
  context: ICheckboxContext = {};

  state = { id: uniqueId('ts-cb-'), labelId: uniqueId('ts-cbl-') };

  render() {
    const { id, required, name, context, className, style, value, checked, onChecked, label, ...rest } = this.props;

    const actuallyChecked = this.isChecked();
    const themeClassNames = checkbox(context);

    return (
      <label
        id={this.state.id}
        className={classes(themeClassNames.container, className)}
        style={style}>
        <span
          id={this.state.labelId}
          aria-hidden
          className={themeClassNames.label}>{label}</span>
        <input
          id={id}
          name={name}
          type="checkbox"
          aria-labelledby={this.state.labelId}
          aria-required={required}
          aria-checked={actuallyChecked}
          checked={actuallyChecked}
          onClick={this.click}
          required={required}
          readOnly
          {...rest}/>
        <span aria-hidden className={themeClassNames.checkbox}></span>
      </label>
    );
  }

  private isChecked = (): boolean => {
    if (Array.isArray(this.context.values)) {
      return this.context.values.indexOf(this.props.value) >= 0;
    }
    return this.props.checked || false;
  }

  private click = (e: React.MouseEvent<HTMLInputElement>) => {
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
