import { Anchor } from 'msteams-ui-components-react';
import * as React from 'react';

export interface NavigationBarProps {
}

export const NavigationBar: React.StatelessComponent<NavigationBarProps> =
  (props: NavigationBarProps) => {
    return <div>
      <Anchor href="#/typography">Typography</Anchor>
      <span>   </span>
      <Anchor href="#/buttons">Button</Anchor>
      <span>   </span>
      <Anchor href="#/checkboxes">Checkbox</Anchor>
      <span>   </span>
      <Anchor href="#/radiobuttons">RadioButton</Anchor>
      <span>   </span>
      <Anchor href="#/inputs">Input</Anchor>
      <span>   </span>
      <Anchor href="#/links">Link</Anchor>
      <span>   </span>
      <Anchor href="#/toggles">Toggle</Anchor>
      <span>   </span>
      <Anchor href="#/tables">Table</Anchor>
      <span>   </span>
      <Anchor href="#/textareas">TextArea</Anchor>
      <span>   </span>
      <Anchor href="#/tabs">Tabs</Anchor>
      <span>   </span>
      <Anchor href="#/dropdowns">Dropdowns</Anchor>
      <span>   </span>
      <Anchor href="#/icons">Icons</Anchor>
    </div>;
  };
