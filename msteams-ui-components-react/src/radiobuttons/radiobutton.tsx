import { radioButton } from 'msteams-ui-styles-core/lib/components/radio-button';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { connectTeamsComponent, IInjectedTeamsProps } from '../index';
import classes from '../utils/classes';
import uniqueId from '../utils/uniqueId';

export interface IRadiobuttonProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  onSelected?: (selected: boolean, value: any) => void;
  selected?: boolean;
  label?: string;
}

interface IRadiobuttonState {
  id: string;
}

interface IRadiobuttonContext {
  onSelected?: (selected: boolean, value: any) => void;
  value?: any;
}

class RadiobuttonInner extends React.Component<IRadiobuttonProps & IInjectedTeamsProps, IRadiobuttonState> {
  static propTypes = {
    onSelected: PropTypes.func,
    value: PropTypes.any.isRequired,
    selected: PropTypes.bool,
    label: PropTypes.string,
  };

  static contextTypes = {
    onSelected: PropTypes.func,
    value: PropTypes.any,
  };

  context: IRadiobuttonContext = {};
  state = { id: uniqueId('ts-rb-'), labelId: uniqueId('ts-rbl-') };

  render() {
    const { id, required, name, context, className, style, value, label, onSelected, ...rest } = this.props;

    const actuallySelected = this.isSelected();
    const themeClassNames = radioButton(context);

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
          type="radio"
          aria-labelledby={this.state.labelId}
          aria-required={required}
          aria-checked={actuallySelected}
          checked={actuallySelected}
          onClick={this.click}
          readOnly
          {...rest}/>
        <span aria-hidden className={themeClassNames.radio}></span>
      </label>
    );
  }

  private isSelected = (): boolean => {
    if (this.context.value != null) {
      return this.context.value === this.props.value;
    }
    return this.props.selected || false;
  }

  private click = (e: React.MouseEvent<HTMLInputElement>) => {
    if (this.context.onSelected) {
      this.context.onSelected(true, this.props.value);
    }
    if (this.props.onSelected) {
      this.props.onSelected(true, this.props.value);
    }

    return this.props.onClick && this.props.onClick(e);
  }
}

export const Radiobutton = connectTeamsComponent(RadiobuttonInner);
