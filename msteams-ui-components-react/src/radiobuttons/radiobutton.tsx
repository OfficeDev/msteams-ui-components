import { radioButton } from 'msteams-ui-styles-core/lib/components/radio-button';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { connectTeamsComponent, IInjectedTeamsProps } from '../index';
import classes from '../utils/classes';
import uniqueId from '../utils/uniqueId';

export interface IRadiobuttonProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
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
  context: IRadiobuttonContext;

  state = { id: uniqueId('ts-rb-') };

  render() {
    const { id, required, name, context, className, style, value, label, onSelected, ...rest } = this.props;

    const actuallySelected = this.isSelected();
    const themeClassNames = radioButton(context);

    return (
      <div
        className={classes(themeClassNames.container, className)}
        style={style}>
        <input
          aria-hidden="true"
          id={id}
          name={name}
          type="radio"
          className={themeClassNames.input}
          checked={actuallySelected}
          value={value}
          readOnly/>
        <button
          id={this.state.id}
          role="radio"
          name={name}
          onMouseDown={(e) => e.preventDefault()}
          aria-required={required}
          aria-checked={actuallySelected}
          onClick={this.click}
          className={themeClassNames.radio}
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

  private isSelected = (): boolean => {
    if (this.context.value != null) {
      return this.context.value === this.props.value;
    }
    return this.props.selected || false;
  }

  private click = (e: React.MouseEvent<HTMLButtonElement>) => {
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
