import React from 'react'
import { Component } from 'react'
import Explore from "../views/Explore/Explore"

class Logout extends Component {
  logout(e){
    e.preventDefault();
    localStorage.clear();
    document.location.href="/";
  }

render() {
 return(
        <a href="details.html" onClick={this.logout}>Logout</a>
       )
    }
}

export default Logout;