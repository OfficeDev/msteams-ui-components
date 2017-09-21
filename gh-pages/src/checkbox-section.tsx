import { Checkbox, CheckboxGroup } from 'msteams-ui-components-react';
import * as React from 'react';

export interface CheckboxSectionState {
  alone: {
    checkbox1: {
      value: any;
      label: string;
      checked: boolean;
      onChecked: { (checked: boolean, value: any): void };
    };
    checkbox2: {
      value: any;
      label: string;
      checked: boolean;
      onChecked: { (checked: boolean, value: any): void };
    };
  };
  group: {
    checkboxGroup: {
      values: any[] | undefined;
      onChecked: { (values: any[]): void };
    };
    checkbox1: {
      value: any;
      label: string;
    };
    checkbox2: {
      value: any;
      label: string;
    };
  };
}

export class CheckboxSection extends React.Component<{}, CheckboxSectionState> {
  constructor(props: any) {
    super(props);
  }

  componentWillMount() {
    this.setState({
      alone: {
        checkbox1: {
          value: 1,
          label: 'Checkbox 1',
          checked: false,
          onChecked: (checked: boolean, value: any) => {
            const checkbox1 = { ...this.state.alone.checkbox1, checked };
            const alone = { ...this.state.alone, checkbox1 };
            const state = { ...this.state, alone };
            this.setState(state);
          },
        },
        checkbox2: {
          value: 1,
          label: 'Checkbox 2',
          checked: false,
          onChecked: (checked: boolean, value: any) => {
            const checkbox2 = { ...this.state.alone.checkbox2, checked };
            const alone = { ...this.state.alone, checkbox2 };
            const state = { ...this.state, alone };
            this.setState(state);
          },
        },
      },
      group: {
        checkboxGroup: {
          values: [],
          onChecked: (values: any[]) => {
            const checkboxGroup = { ...this.state.group.checkboxGroup, values };
            const group = { ...this.state.group, checkboxGroup };
            const state = { ...this.state, group };
            this.setState(state);
          },
        },
        checkbox1: {
          value: 1,
          label: 'Checkbox 1',
        },
        checkbox2: {
          value: 2,
          label: 'Checkbox 2',
        },
      },
    });
  }

  render() {
    return <div>
      <h1>Checkboxes</h1>
      <h2>Alone</h2>
      <Checkbox {...this.state.alone.checkbox1} />
      <Checkbox {...this.state.alone.checkbox2} />
      <h2>In Group</h2>
      <CheckboxGroup {...this.state.group.checkboxGroup}>
        <Checkbox {...this.state.group.checkbox1} />
        <Checkbox {...this.state.group.checkbox2} />
      </CheckboxGroup>
    </div>;
  }
}
