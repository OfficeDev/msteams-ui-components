import * as PropTypes from 'prop-types';
import * as React from 'react';
import { CSSProperties } from 'react';
import uniqueId from '../utils/uniqueId';

export interface CheckboxGroupProps {
  onChange?: (values: any[]) => void;
  values?: any[];
  legend?: string;
  legendStyle?: CSSProperties;
}

export interface CheckboxGroupState {
  id: string;
}

export class CheckboxGroup extends React.Component<CheckboxGroupProps, CheckboxGroupState> {
  static childContextTypes = {
    onChange: PropTypes.func,
    values: PropTypes.array,
  };

  static propTypes = {
    onChange: PropTypes.func,
    values: PropTypes.array,
    legend: PropTypes.string,
    legendStyle: PropTypes.object,
  };

  static defaultProps: CheckboxGroupProps = {
    values: [],
    legendStyle: {},
  };

  constructor(props: CheckboxGroupProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      id: uniqueId('ts-cbg-'),
    };
  }

  render() {
    return (
      <fieldset id={this.state.id}>
        {this.props.legend ? <legend style={this.props.legendStyle}>{this.props.legend}</legend> : null}
        {this.props.children}
      </fieldset>
    );
  }

  protected getChildContext() {
    return {
      onChange: this.props.onChange ? this.handleChange : null,
      values: this.props.values,
    };
  }

  private handleChange(checked: boolean, value: any) {
    if (this.props.onChange) {
      let values = this.props.values;
      if (Array.isArray(values)) {
        if (checked) {
          if (values.indexOf(value) < 0) {
            values = [...values];
            values.push(value);
          }
        } else {
          const valueIndex = values.indexOf(value);
          if (valueIndex >= 0) {
            values = [...values];
            values.splice(valueIndex, 1);
          }
        }
      }

      this.props.onChange(values as any[]);
    }
  }
}
