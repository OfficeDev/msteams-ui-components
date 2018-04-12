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

  state = { id: uniqueId('ts-cb-') };

  render() {
    const { id, required, name, context, className, style, value, checked, onChecked, label, ...rest } = this.props;

    const actuallyChecked = this.isChecked();
    const themeClassNames = checkbox(context);

    return (
      <label
        id={this.state.id}
        role="checkbox"
        aria-required={required}
        aria-checked={actuallyChecked}
        className={classes(themeClassNames.container, className)}
        style={style}>
        <input
          id={id}
          aria-hidden
          name={name}
          type="checkbox"
          checked={actuallyChecked}
          onClick={this.click}
          required={required}
          readOnly
          {...rest}/>
        <span className={themeClassNames.label}>{label}</span>
        <span className={themeClassNames.checkbox}></span>
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
