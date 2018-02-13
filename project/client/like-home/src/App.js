import React, { Component } from 'react';
import logo from './logo.svg';
import LikeHomeLogo from './assets/LikeHomeLogo.png';
import './App.scss';

import {Nav, Navbar, NavItem, NavDropdown, MenuItem, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';
import Counter from './components/Counter';
import SearchBar from './components/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">
              <img src={LikeHomeLogo} className="LikeHomeLogo" alt="logo" href="#"/>
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
          <Nav>
            <NavItem>
              Explore
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem>
              Reservations
            </NavItem>
            <NavItem>
              Favorites
            </NavItem>
            <NavItem>
              Rewards
            </NavItem>
            <NavItem>
              Account
            </NavItem>
          </Nav>
          </Navbar.Collapse>
        </Navbar>

        <header className="App-header">

            <img src={logo} className="App-logo" alt="logo" />

          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Counter />

      </div>
    );
  }
}

export default App;
