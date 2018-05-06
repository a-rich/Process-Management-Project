import React from 'react'
import { Component } from 'react'


class Logout extends Component {
  logout(e){
    e.preventDefault();
    localStorage.clear();
  }

render() {
 return(
        <a href="#" onClick={this.logout}>Logout</a>
       )
    }
}

export default Logout;