import React from 'react'
import { Component} from 'react';
import 'react-dates/initialize';
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import moment from 'moment';
import 'react-dates/lib/css/_datepicker.css';
import '../stylesheets/Home.scss'
import { DateRangePicker } from 'react-dates';
import {setSearchDates} from '../actions.js'


const START_DATE = 'startDate';
const END_DATE = 'endDate';

const propTypes = {
  autoFocus: PropTypes.bool,
  autoFocusEndDate: PropTypes.bool,
  initialStartDate: localStorage.getItem('startDate') !== null? localStorage.getItem('startDate'): "",
  initialEndDate: localStorage.getItem('endDate') !== null? localStorage.getItem('endDate'): ""
}

class DateRange extends Component {

constructor(props) {
    super(props)

    //localStorage.setItem('startDate', localStorage.getItem('startDate') !== null? localStorage.getItem('startDate'): "")
    //localStorage.setItem('endDate', localStorage.getItem('endDate') !== null? localStorage.getItem('endDate'): "")


    let focusedInput = null
    if (props.autoFocus) {
      focusedInput = START_DATE
    } else if (props.autoFocusEndDate) {
      focusedInput = END_DATE
    }

    this.state = {
      focusedInput,
      startDate: props.initialStartDate,
      endDate: props.initialEndDate
    }

    this.onDatesChange = this.onDatesChange.bind(this)
    this.onFocusChange = this.onFocusChange.bind(this)
}

  onDatesChange({ startDate, endDate }) {
    this.setState({ startDate, endDate })
  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput })
  }

 componentWillMount() {
  

    //if (localStorage.getItem('startDate') !== null)
    //this.setState({ startDate: localStorage.getItem('startDate')});


    //if (localStorage.getItem('endDate') !== null)
    //this.setState({ endDate: localStorage.getItem('endDate')});

  //console.log("MOUNTING: ", this.state)


  
 }

componentWillRecieveProps(nextProps) {
  console.log("CHANGES")
   //   console.log("MOUNTING: ", this.state)
   // this.setState({ startDate: localStorage.getItem('startDate') !== null? localStorage.getItem('startDate'): "", 
   //     endDate: localStorage.getItem('endDate') !== null? localStorage.getItem('endDate'): ""})
   // console.log("MOUNTING AGAIN: ", this.state)
 }


render() {

    //console.log('Start Date', this.state.startDate);
    //console.log('End Date', this.state.endDate);

   

const { focusedInput, startDate, endDate } = this.state;

	return (

  <DateRangePicker daySize={26} autoFocus
  
  startDateId="FromDate"
  endDateId="ToDate" 
  startDate= {this.state.startDate}
  endDate = {this.state.endDate}
  onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} 
  focusedInput={this.state.focusedInput} 
  onFocusChange={focusedInput => this.setState({ focusedInput })} 
  startDatePlaceholderText="From?"
  endDatePlaceholderText="To?"
  noBorder="true"
  hideKeyboardShortcutsPanel= "true"
  minimumNights="1"
  showClearDate="true"
  reopenPickerOnClearDate="true"
  openDirection="down"
  orientation="horizontal" 
  anchorDirection="left" 
  displayFormat="MMM D"
  monthFormat = "MMMM  'YY"
  verticalSpacing = {100}
  navPrev ="<" 
  navNext =">"
  small ="true"
  withPortal = "true"

/>
)
     
  
}

}

export default DateRange 

