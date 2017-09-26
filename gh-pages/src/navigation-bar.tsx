import * as React from 'react';
import { MenuItem, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export interface NavigationBarProps {
}

export const NavigationBar: React.StatelessComponent<NavigationBarProps> =
 (props: NavigationBarProps) => {
   return <Navbar>
    <Navbar.Header>
      <Navbar.Brand>MSTeams UI Components</Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <LinkContainer to="/buttons">
        <NavItem>Buttons</NavItem>
      </LinkContainer>
      <LinkContainer to="/checkboxes">
        <NavItem>Checkboxes</NavItem>
      </LinkContainer>
      <LinkContainer to="/radiobuttons">
      <NavItem>Radiobuttons</NavItem>
      </LinkContainer>
      <LinkContainer to="/inputs">
        <NavItem>Input Fields</NavItem>
      </LinkContainer>
      <LinkContainer to="/links">
        <NavItem>Links</NavItem>
      </LinkContainer>
      <LinkContainer to="/toggles">
        <NavItem>Toggles</NavItem>
      </LinkContainer>
      <LinkContainer to="/tabs">
        <NavItem>Tabs</NavItem>
      </LinkContainer>
    </Nav>
  </Navbar>;
};
