import * as PropTypes from 'prop-types';
import * as React from 'react';
import { CSSProperties } from 'react';
import { Theme } from 'teams-styles-core';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';
import uniqueId from '../utils/uniqueId';

export interface RadiobuttonProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  onSelected?: (selected: boolean, value: any) => void;
  value: any;
  selected?: boolean;
  label?: string;
}

interface RadiobuttonState {
  id: string;
}

interface RadiobuttonContext {
  onSelected?: (selected: boolean, value: any) => void;
  value?: any;
}

class RadiobuttonInner extends React.Component<RadiobuttonProps & InjectedTeamsProps, RadiobuttonState> {
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

  constructor(props: RadiobuttonProps & InjectedTeamsProps, context: any) {
    super(props, context);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {id: uniqueId('ts-rb-')};
  }

  render() {
    const selected = this.selected(this.props, this.context);
    let boxClassName: string | undefined;
    let labelClassName: string | undefined;
    if (this.props.theme) {
      boxClassName = this.props.theme.radiobutton.unselected;
      if (selected) {
        boxClassName += ' ' + this.props.theme.radiobutton.selected;
      }
      labelClassName = this.props.theme.checkbox.label;
    }

    const divProps = {...this.props};
    delete divProps.theme;
    delete divProps.onSelected;
    delete divProps.value;
    delete divProps.selected;
    delete divProps.label;

    return (
      <div {...divProps}>
        <input
          id={this.state.id}
          type="radio"
          value={this.props.value}
          checked={selected}
          hidden />
        <button
          onClick={() => this.handleSelect()}
          className={boxClassName} />
        {this.props.label ? <label htmlFor={this.state.id} className={labelClassName}>{this.props.label}</label> : null}
        {this.props.children}
      </div>
    );
  }

  private selected(props: RadiobuttonProps, context: RadiobuttonContext): boolean {
    if (context.value) {
      return context.value === props.value;
    }
    return props.selected || false;
  }

  private handleSelect() {
    if (this.context.onSelected) {
      this.context.onSelected(true, this.props.value);
    }
    if (this.props.onSelected) {
      this.props.onSelected(true, this.props.value);
    }
  }
}

export const Radiobutton = connectTeamsComponent(RadiobuttonInner);
