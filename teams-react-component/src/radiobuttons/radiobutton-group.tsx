import * as PropTypes from 'prop-types';
import * as React from 'react';
import { CSSProperties } from 'react';
import add from '../utils/add';
import remove from '../utils/remove';
import uniqueId from '../utils/uniqueId';

export interface RadiobuttonGroupProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  onSelected?: (value: any) => void;
  value?: any;
}

export class RadiobuttonGroup extends React.Component<RadiobuttonGroupProps> {
  static childContextTypes = {
    onSelected: PropTypes.func,
    value: PropTypes.any,
  };

  static propTypes = {
    onSelected: PropTypes.func,
    value: PropTypes.any,
  };

  constructor(props: RadiobuttonGroupProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const divProps = {...this.props};
    delete divProps.onSelected;
    delete divProps.value;

    return (
      <div {...divProps}>{this.props.children}</div>
    );
  }

  private getChildContext() {
    return {
      onSelected: this.handleChange,
      value: this.props.value,
    };
  }

  private handleChange(selected: boolean, value: any) {
    if (selected && this.props.onSelected) {
      this.props.onSelected(value);
    }
  }
}
