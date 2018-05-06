import React from 'react'
import { Component } from 'react'


class Logout extends Component {
  logout(e){
    e.preventDefault();
    localStorage.clear();
    window.location.reload(true);
  }

render() {
 return(
        <a href="#" onClick={this.logout}>Logout</a>
       )
    }
}

export default Logout;