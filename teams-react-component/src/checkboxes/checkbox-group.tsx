import * as PropTypes from 'prop-types';
import * as React from 'react';
import { CSSProperties } from 'react';
import add from '../utils/add';
import remove from '../utils/remove';
import uniqueId from '../utils/uniqueId';

export interface CheckboxGroupProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  onChecked?: (values: any[]) => void;
  values?: any[];
}

export class CheckboxGroup extends React.Component<CheckboxGroupProps> {
  static childContextTypes = {
    onChecked: PropTypes.func,
    values: PropTypes.array,
  };

  static propTypes = {
    onChecked: PropTypes.func,
    values: PropTypes.array,
  };

  constructor(props: CheckboxGroupProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const divProps = {...this.props};
    delete divProps.onChecked;
    delete divProps.values;

    return (
      <div {...divProps}>{this.props.children}</div>
    );
  }

  private getChildContext() {
    return {
      onChecked: this.handleChange,
      values: this.props.values,
    };
  }

  private handleChange(checked: boolean, value: any) {
    if (this.props.onChecked) {
      let values = Array.isArray(this.props.values) ? this.props.values : [];
      values = checked ? add(values, value) : remove(values, value);
      this.props.onChecked(values);
    }
  }
}
