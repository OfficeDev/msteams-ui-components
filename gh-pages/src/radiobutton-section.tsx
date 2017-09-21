import * as React from 'react';
import { Radiobutton, RadiobuttonGroup } from 'teams-react-component';

export interface RadiobuttonSectionState {
  alone: {
    radiobutton1: {
      value: any;
      label: string;
      selected: boolean;
      onSelected: {(selected: boolean, value: any): void};
    };
    radiobutton2: {
      value: any;
      label: string;
      selected: boolean;
      onSelected: {(selected: boolean, value: any): void};
    };
  };
  group: {
    radiobuttonGroup: {
      value: any|undefined;
      onSelected: {(value: any): void};
    };
    radiobutton1: {
      value: any;
      label: string;
    };
    radiobutton2: {
      value: any;
      label: string;
    };
  };
}

export class RadiobuttonSection extends React.Component<{}, RadiobuttonSectionState> {
  constructor(props: any) {
    super(props);
  }

  componentWillMount() {
    this.setState({
      alone: {
        radiobutton1: {
          value: 1,
          label: 'Radiobutton 1',
          selected: false,
          onSelected: (selected: boolean, value: any) => {
            const radiobutton1 = {...this.state.alone.radiobutton1, selected};
            const alone = {...this.state.alone, radiobutton1};
            const state = {...this.state, alone};
            this.setState(state);
          },
        },
        radiobutton2: {
          value: 1,
          label: 'Radiobutton 2',
          selected: false,
          onSelected: (selected: boolean, value: any) => {
            const radiobutton2 = {...this.state.alone.radiobutton2, selected};
            const alone = {...this.state.alone, radiobutton2};
            const state = {...this.state, alone};
            this.setState(state);
          },
        },
      },
      group: {
        radiobuttonGroup: {
          value: 1,
          onSelected: (value: any) => {
            const radiobuttonGroup = {...this.state.group.radiobuttonGroup, value};
            const group = {...this.state.group, radiobuttonGroup};
            const state = {...this.state, group};
            this.setState(state);
          },
        },
        radiobutton1: {
          value: 1,
          label: 'Radiobutton 1',
        },
        radiobutton2: {
          value: 2,
          label: 'Radiobutton 2',
        },
      },
    });
  }

  render() {
    return <div>
      <h1>Checkboxes</h1>
      <h2>Alone</h2>
      <Radiobutton {...this.state.alone.radiobutton1} />
      <Radiobutton {...this.state.alone.radiobutton2} />
      <h2>In Group</h2>
      <RadiobuttonGroup {...this.state.group.radiobuttonGroup}>
        <Radiobutton {...this.state.group.radiobutton1} />
        <Radiobutton {...this.state.group.radiobutton2} />
      </RadiobuttonGroup>
    </div>;
  }
}
