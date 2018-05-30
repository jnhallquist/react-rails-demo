import React from 'react';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';

const TopNav = () => (
  <Navbar staticTop>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/"><Glyphicon glyph="home" /></a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem href="/users">Users</NavItem>
      <NavItem href="/">NavItem</NavItem>
      <NavItem href="/">Another NavItem</NavItem>
    </Nav>
    <Nav pullRight>
      <NavItem href="/">Sign Up</NavItem>
      <NavItem href="/">Login</NavItem>
    </Nav>
  </Navbar>
);

export default TopNav;
