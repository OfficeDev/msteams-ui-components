import { map } from 'lodash';
import {
  CompoundButton,
  connectTeamsComponent,
  InjectedTeamsProps,
  Panel,
  PanelBody,
  PanelHeader
} from 'msteams-ui-components-react';
import { MSTeamsIcon, MSTeamsIconType, MSTeamsIconWeight } from 'msteams-ui-icons-react';
import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Routes } from '../routes';
import { sidebar } from './styles';

interface SidebarViewProps { }

class SidebarInner extends React.Component<SidebarViewProps & InjectedTeamsProps & RouteComponentProps<{}>> {
  static buttons = [{
    location: Routes.buttons,
    name: 'Buttons',
    description: 'Event triggering',
    icon: () => SidebarInner.icon(MSTeamsIconType.Click),
  }, {
    location: Routes.dropdowns,
    name: 'Dropdowns',
    description: 'Condensed event triggering',
    icon: () => SidebarInner.icon(MSTeamsIconType.Outline),
  }, {
    location: Routes.checkboxes,
    name: 'Checkboxes',
    description: 'Multi-item selection',
    icon: () => SidebarInner.icon(MSTeamsIconType.ToDo),
  }, {
    location: Routes.radiobuttons,
    name: 'RadioButtons',
    description: 'Single-item selection',
    icon: () => SidebarInner.icon(MSTeamsIconType.CircleBig),
  }, {
    location: Routes.toggles,
    name: 'Toggles',
    description: 'Turning things on and off',
    icon: () => SidebarInner.icon(MSTeamsIconType.Insert),
  }, {
    location: Routes.inputs,
    name: 'Inputs',
    description: 'Text input',
    icon: () => SidebarInner.icon(MSTeamsIconType.Topic),
  }, {
    location: Routes.textareas,
    name: 'TextAreas',
    description: 'Long text input',
    icon: () => SidebarInner.icon(MSTeamsIconType.Glossary),
  }, {
    location: Routes.links,
    name: 'Links',
    description: 'Inline navigation',
    icon: () => SidebarInner.icon(MSTeamsIconType.Link),
  }, {
    location: Routes.tabs,
    name: 'Tabs',
    description: 'Page navigation',
    icon: () => SidebarInner.icon(MSTeamsIconType.Tab),
  }, {
    location: Routes.tables,
    name: 'Tables',
    description: 'Data presentation',
    icon: () => SidebarInner.icon(MSTeamsIconType.GVCGrid),
  }, {
    location: Routes.icons,
    name: 'Icons',
    description: 'Glyphs; logos, objects, monkey',
    icon: () => SidebarInner.icon(MSTeamsIconType.IllustrationMonkey),
  }];

  private static icon = (type: string) => {
    return <MSTeamsIcon
      style={{ margin: 'auto', fontSize: '28px' }}
      iconWeight={MSTeamsIconWeight.Light} iconType={type} />;
  }

  render() {
    const { context } = this.props;
    const classNames = sidebar(context);
    return <Panel className={classNames.container}>
      <PanelHeader>
        <div className={classNames.header.title} >
          Control Library
        </div>
        <div className={classNames.header.welcomeText}>
          <p>
            This tab is a showcase of the Microsoft Teams UI Controls library.
          </p>
          <p>
            Click through the controls below to get a preview of what is available.
          </p>
        </div>
      </PanelHeader>
      <PanelBody>
        {map(SidebarInner.buttons, (button, index) => {
          return <CompoundButton
            key={index}
            className={classNames.body.button}
            onClick={this.onClick(button.location)}
            icon={button.icon}
            primaryText={button.name}
            secondaryText={button.description} />;
        })}
      </PanelBody>
    </Panel>;
  }

  private onClick = (location: string) => {
    return () => {
      this.props.history.push(location);
    };
  }
}

export const Sidebar = withRouter<{}>(connectTeamsComponent(SidebarInner));
