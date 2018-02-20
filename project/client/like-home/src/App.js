import React, { Component } from 'react';
import logo from './logo.svg';
import LikeHomeLogo from './assets/LikeHomeLogo.png';
import Explore from './components/Explore';
import './App.scss';

import {Nav, Navbar, NavItem, NavDropdown, MenuItem, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';
import Counter from './components/Counter';
import SearchBar from './components/SearchBar';
import CollectionView from './components/CollectionView';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Reservation from './views/Reservation/Reservation';
import Favorites from './views/Favorites/Favorites';
import Account from './views/Account/Account';
import Login from './components/modals/Login';
import SignUp from './components/modals/SignUp';
import Ripples from 'react-ripples'

class App extends Component {
  render() {
    return (
      <Router>

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
              <Link to="/">Explore</Link>
            </NavItem>
          </Nav>
          <Nav pullRight>
             <NavItem>
              <Login/>
            </NavItem>
             <NavItem>
              <SignUp/>
            </NavItem>
            <NavItem>
              <Link to="/reservations">Reservations</Link>
            </NavItem>
            <NavItem>
              <Link to="/favorites">Favorites</Link>
            </NavItem>
            <NavItem>
              <Link to="/rewards">Rewards</Link>
            </NavItem>
            <NavItem>
              <Link to="/account">Account</Link>
            </NavItem>
          </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route exact path="/" component={Explore}/>
        <Route path="signup" component={SignUp}/>
        <Route path="/reservations" component={Reservation}/>
        <Route path="/favorites" component={Favorites}/>
        <Route path="/rewards" component={Rewards}/>
        <Route path="/account" component={Account}/>
      </div>
      </Router>

    );
  }
}

const Rewards = () => (
  <div>
    <h1>Rewards</h1>
  </div>

);

export default App;
