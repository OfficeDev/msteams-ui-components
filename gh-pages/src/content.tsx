import * as React from 'react';
import { Route, Switch } from 'react-router';
import * as ButtonSection from '../examples/button.example.jsx';
import * as CheckboxSection from '../examples/checkbox.example.jsx';
import * as DropdownSection from '../examples/dropdown.example.jsx';
import * as IconsSection from '../examples/icons.example.jsx';
import * as InputSection from '../examples/input.example.jsx';
import * as LinkSection from '../examples/link.example.jsx';
import * as RadiobuttonSection from '../examples/radiobutton.example.jsx';
import * as TabSection from '../examples/tab.example.jsx';
import * as TableSection from '../examples/table.example.jsx';
import * as TextAreaSection from '../examples/textarea.example.jsx';
import * as TogglesSection from '../examples/toggle.example.jsx';
import * as TypographySection from '../examples/typography.example.jsx';
import { PreviewSection } from './preview-section';

export const Content: React.StatelessComponent = () => {
  return <Switch>
    <Route path="/typography" render={() =>
      <PreviewSection code={TypographySection.toString()} />
    } />
    <Route path="/buttons" render={() =>
      <PreviewSection code={ButtonSection.toString()} />
    } />
    <Route path="/toggles" render={() =>
      <PreviewSection code={TogglesSection.toString()} />
    } />
    <Route path="/checkboxes" render={() =>
      <PreviewSection code={CheckboxSection.toString()} />
    } />
    <Route path="/links" render={() =>
      <PreviewSection code={LinkSection.toString()} />
    } />
    <Route path="/inputs" render={() =>
      <PreviewSection code={InputSection.toString()} />
    } />
    <Route path="/radiobuttons" render={() =>
      <PreviewSection code={RadiobuttonSection.toString()} />
    } />
    <Route path="/tabs" render={() =>
      <PreviewSection code={TabSection.toString()} />
    } />
    <Route path="/tables" render={() =>
      <PreviewSection code={TableSection.toString()} />
    } />
    <Route path="/textareas" render={() =>
      <PreviewSection code={TextAreaSection.toString()} />
    } />
    <Route path="/dropdowns" render={() =>
      <PreviewSection code={DropdownSection.toString()} />
    } />
    <Route path="/icons" render={() =>
      <PreviewSection code={IconsSection.toString()} />
    } />
  </Switch>;
};
