import { normalize, setupPage } from 'csstips';
import { Panel, TeamsComponentContext, ThemeStyle } from 'msteams-ui-components-react';
import { Radiobutton, RadiobuttonGroup } from 'msteams-ui-components-react';
import * as React from 'react';
import { Grid, Row } from 'react-bootstrap';
import { render } from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import { Content } from './content';
import { NavigationBar } from './navigation-bar';

const mountPoint = 'root';

normalize();
setupPage(`#${mountPoint}`);

const GHPages: React.StatelessComponent =
  (props: any) => {
    return (
      <HashRouter>
        <Grid fluid>
          <Row>
            <NavigationBar />
          </Row>
          <Row>
            <Content />
          </Row>
        </Grid>
      </HashRouter>
    );
  };

render(
  <GHPages />,
  document.getElementById(mountPoint)
);
