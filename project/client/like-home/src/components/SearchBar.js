import React from 'react'
import { Component } from 'react';
import '../stylesheets/Home.scss'
import Calendar from 'react-icons/lib/fa/calendar'
import MdLocationOn from 'react-icons/lib/md/location-on'
import TiLocationOutline from 'react-icons/lib/ti/location-outline'
import Bed from 'react-icons/lib/fa/bed'
import FaDollar from 'react-icons/lib/fa/dollar'
import Search from 'react-icons/lib/fa/search'
import VideoPlayer from '../components/VideoPlayer';
import Autocomplete from '../components/Autocomplete'
import DateRange from '../components/DateRange'

// to be read from backend
const locations = [
"Chicago",
"San Francisco",
"Los Angeles",
"San Jose",
"Washington",
"New York",
"Miami",
"Las Vegas"
]

class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }


  submit(e) {
    e.preventDefault()
    console.log('Location', this.refs.location.value)
    console.log('From date', this.refs.fromDate.value)
    console.log('To date', this.refs.toDate.value)
    console.log('Min', this.refs.Min.value)
    console.log('Max', this.refs.Max.value)
    console.log('Room Num', this.refs.roomNum.value)

    // inputs ready for query to backend
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

        <label class = "date-input">
        <Calendar class = "icon-size"/>
        <DateRange/>
        </label>

        <label class = "price-input">
        <FaDollar class = "icon-size"/>
        <input id = "Min-price" type = "number" class = "price-text" placeholder = "Min?" ref="Min" required />
        <input id = "Min-price" type = "number" class = "price-text" placeholder = "Max?" ref="Max" required />
        </label>

        <label class = "room-input" >
        <Bed class = "icon-size" />
        <select class = "room-text" ref="roomNum" >
        <option value="one">1</option>
        <option value="two">2</option>
        <option value="three">3</option>
        <option value="4plus">4+</option>
        </select>
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

export default SearchBar;