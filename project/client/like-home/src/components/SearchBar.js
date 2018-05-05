import React from 'react'
import { Component } from 'react';
import '../stylesheets/Home.scss'
import Calendar from 'react-icons/lib/fa/calendar'
import MdLocationOn from 'react-icons/lib/md/location-on'
import TiLocationOutline from 'react-icons/lib/ti/location-outline'
import Bed from 'react-icons/lib/fa/bed'
import FaDollar from 'react-icons/lib/fa/dollar'
import Search from 'react-icons/lib/fa/search'
import VideoPlayer from '../components/VideoPlayer'
import Autocomplete from '../components/Autocomplete'
import DateRange from '../components/DateRange'
import {searchHotels} from '../actions/Search'
import { withRouter } from "react-router-dom"

// to be read from backend
const locations = [
"Chicago",
"San Francisco",
"Los Angeles",
"San Jose",
"Washington",
"New York",
"Miami",
"Las Vegas",
"Austin"
]

class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
    this.state = { searchResults: [] }
  }


  submit(e) {
    e.preventDefault()
    console.log('Location', this.refs.location.value)

    localStorage.setItem('location', this.refs.location.value);

    // inputs ready for query to backend
    searchHotels(
      {"query": this.refs.location.value,
      "sort": {"name": 1, "price": 1, "rating": 1 }
    })
    this.props.history.push('/SearchHotels');
  }

  render() {
 return(
<div>  
  <form onSubmit={this.submit}>
    <div class = "form-row">
      <div class = "inputs-row">
        <label class = "location-input">
        <MdLocationOn class = "icon-size" />
        <Autocomplete options = {locations} placeholder = "Where To?" ref="location" required/>
        </label>

        <label>
         <button class = "search"> <Search class = "search-icon"/> </button>
        </label>

      </div>
    </div>
</form>
</div>
 )
}
};

export default withRouter(SearchBar);