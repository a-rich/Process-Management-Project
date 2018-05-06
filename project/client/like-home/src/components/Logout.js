import React from 'react'
import { Component } from 'react'
import { logout } from '../actions/Account.js'


class Logout extends Component {
  logout(e){
    e.preventDefault();
    this.props.logout();
  }

render() {
 return(
        <a href="#" onClick={this.logout.bind(this)}>Logout</a>
       )
    }
}

export default Logout;