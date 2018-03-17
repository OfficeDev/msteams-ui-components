import { Panel, PanelBody, PanelFooter, PanelHeader } from 'msteams-ui-components-react';
import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Routes } from '../routes';
import { Description } from './description';
import { PreviewSection } from './preview-section';

// tslint:disable:no-var-requires
const ButtonSection = require('../examples/button.example.jsx');
const CheckboxSection = require('../examples/checkbox.example.jsx');
const DropdownSection = require('../examples/dropdown.example.jsx');
const IconsSection = require('../examples/icons.example.jsx');
const InputSection = require('../examples/input.example.jsx');
const LinkSection = require('../examples/link.example.jsx');
const RadiobuttonSection = require('../examples/radiobutton.example.jsx');
const TabSection = require('../examples/tab.example.jsx');
const TableSection = require('../examples/table.example.jsx');
const TextAreaSection = require('../examples/textarea.example.jsx');
const TogglesSection = require('../examples/toggle.example.jsx');
// tslint:enable:no-var-requires

export const Content: React.StatelessComponent = () => {
  return (
    <Switch>
      <Route path={Routes.buttons} render={() =>
        <PreviewSection code={ButtonSection} />
      } />
      <Route path={Routes.toggles} render={() =>
        <PreviewSection code={TogglesSection} />
      } />
      <Route path={Routes.checkboxes} render={() =>
        <PreviewSection code={CheckboxSection} />
      } />
      <Route path={Routes.links} render={() =>
        <PreviewSection code={LinkSection} />
      } />
      <Route path={Routes.inputs} render={() =>
        <PreviewSection code={InputSection} />
      } />
      <Route path={Routes.radiobuttons} render={() =>
        <PreviewSection code={RadiobuttonSection} />
      } />
      <Route path={Routes.tabs} render={() =>
        <PreviewSection code={TabSection} />
      } />
      <Route path={Routes.tables} render={() =>
        <PreviewSection code={TableSection} />
      } />
      <Route path={Routes.textareas} render={() =>
        <PreviewSection code={TextAreaSection} />
      } />
      <Route path={Routes.dropdowns} render={() =>
        <PreviewSection code={DropdownSection} />
      } />
      <Route path={Routes.icons} render={() =>
        <PreviewSection code={IconsSection} />
      } />
      <Route path={Routes.index} component={Description} />
    </Switch>
  );
};
