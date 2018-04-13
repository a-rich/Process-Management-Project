import React, { Component } from 'react'
import logo from './logo.svg'
import Explore from './views/Explore/Explore'
import './App.scss'
import {Nav, Navbar, NavItem, MenuItem,} from 'react-bootstrap'
import Counter from './components/Counter'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Favorites from './views/Favorites/Favorites'
import Account from './views/Account/Account'
import SearchResults from './views/SearchResults/SearchResults'
import Login from './components/modals/Login'
import Ripples from 'react-ripples'
import SearchHotels from './views/SearchHotels/SearchHotels'
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
            <Link to="/">LIKEHOME</Link>
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
              <Link to="/account">Account</Link>
            </NavItem>
            <NavItem>
              <Link to="/SearchHotels">SearchHotels</Link>
            </NavItem>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="routeOverlay">
          <Route exact path="/" component={Explore}/>
          <Route path="/account" component={Account}/>
          <Route path="/search-results" component={SearchResults} />
          <Route path="/SearchHotels" component={SearchHotels} />
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
