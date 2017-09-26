import { TeamsComponentContext } from 'msteams-ui-components-react';
import { ThemeStyle } from 'msteams-ui-styles-core';
import * as React from 'react';
import { Grid, Nav, NavItem } from 'react-bootstrap';
import { Route, Switch } from 'react-router';
import * as ButtonSection from '../examples/button.example.jsx';
import * as CheckboxSection from '../examples/checkbox.example.jsx';
import * as InputSection from '../examples/input.example.jsx';
import * as LinkSection from '../examples/link.example.jsx';
import * as RadiobuttonSection from '../examples/radiobutton.example.jsx';
import * as TabSection from '../examples/tab.example.jsx';
import * as TableSection from '../examples/table.example.jsx';
import * as TogglesSection from '../examples/toggle.example.jsx';
import { PreviewSection } from './preview-section';

export interface ContentProps {
}

export interface ContentState {
  fontSize: number;
  theme: ThemeStyle;
}

export class Content extends React.Component<ContentProps, ContentState> {
  constructor() {
    super();
    this.onThemeChange = this.onThemeChange.bind(this);
    this.state = {
      fontSize: this.pageFontSize(),
      theme: ThemeStyle.Light,
    };
  }

  render() {
    return <div>
      <Grid>
        <Nav
          bsStyle="tabs"
          activeKey={this.state.theme}
          onSelect={(eventKey: any) => this.onThemeChange(eventKey)}>
          <NavItem eventKey={ThemeStyle.Light}>Light</NavItem>
          <NavItem eventKey={ThemeStyle.Dark}>Dark</NavItem>
          <NavItem eventKey={ThemeStyle.HighContrast}>High Contrast</NavItem>
        </Nav>
        <TeamsComponentContext fontSize={this.state.fontSize} theme={this.state.theme}>
          <Switch>
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
          </Switch>
        </TeamsComponentContext>
      </Grid>
    </div>;
  }

  private onThemeChange(newTheme: ThemeStyle) {
    this.setState({
      fontSize: this.pageFontSize(),
      theme: newTheme,
    });
  }

  private pageFontSize(): number {
    let fontSize = window.getComputedStyle(document.getElementsByTagName('html')[0]).getPropertyValue('font-size');
    fontSize = fontSize.replace('px', '');
    let size = parseInt(fontSize, 10);
    if (!size) {
      size = 16;
    }
    return size;
  }
}
