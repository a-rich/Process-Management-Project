import React, { Component } from 'react';
import logo from './logo.svg';
import Explore from './components/Explore';
import './App.scss';
import {Nav, Navbar, NavItem, MenuItem,} from 'react-bootstrap';
import Counter from './components/Counter';
import SearchBar from './components/SearchBar';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Reservation from './views/Reservation/Reservation';
import Favorites from './views/Favorites/Favorites';
import Account from './views/Account/Account';
import SearchResults from './views/SearchResults/SearchResults';
import Login from './components/modals/Login';
import SignUp from './components/modals/SignUp';
import Ripples from 'react-ripples';


class App extends Component {
  render() {
    return (
      <Router>

      <div className="App">
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#" >
                LIKEHOME
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
          <Nav pullRight>
          <NavItem>
              <Link to="/">Explore</Link>
            </NavItem>
             <NavItem>
              <Login/>
            </NavItem>
             <NavItem>
              <SignUp/>
            </NavItem>
            <NavItem>
              <Link to="/account">Account</Link>
            </NavItem>
            <NavItem>
              <Link to="/listview">Listview</Link>
            </NavItem>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="routeOverlay">
          <Route exact path="/" component={Explore}/>
          <Route path="signup" component={SignUp}/>
          <Route path="/account" component={Account}/>
          <Route path="/search-results" component={SearchResults} />
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
