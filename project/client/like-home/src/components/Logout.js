import React from 'react'
import { Component } from 'react'
import Explore from "../views/Explore/Explore"
import {cancelAllBooking} from "../actions"
import {clearUser} from "../actions"
class Logout extends Component {
  logout(e){
    e.preventDefault();
    window.store.dispatch(cancelAllBooking());
    window.store.dispatch(clearUser());
    document.location.href="/";
  }

render() {
 return(
        <a onClick={this.logout}>Logout</a>
       )
    }
}

export default Logout;