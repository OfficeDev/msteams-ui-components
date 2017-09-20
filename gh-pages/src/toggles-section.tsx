import * as React from 'react';
import { Toggle } from 'teams-react-component';

interface TogglesSectionState {
  checked: boolean;
}

export class TogglesSection extends React.Component<{}, TogglesSectionState> {
  constructor() {
    super();
    this.state = {
      checked: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      checked: !this.state.checked,
    });
  }

  render() {
    return (
      <div>
        <h1>Toggles</h1>
        <Toggle value={this.state.checked} onChange={this.toggle} />
      </div>
    );
  }
}
