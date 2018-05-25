import React from 'react';
import { render } from 'react-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

const TopNav = () => (
  <Navbar staticTop>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">Home</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem href="/users">All Users</NavItem>
      <NavItem href="/users/1">User</NavItem>
    </Nav>
  </Navbar>
)

export default TopNav;
