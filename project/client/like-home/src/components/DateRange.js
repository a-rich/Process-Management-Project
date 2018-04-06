import React from 'react'
import { Component} from 'react';
import 'react-dates/initialize';
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import moment from 'moment';
import 'react-dates/lib/css/_datepicker.css';
import '../stylesheets/Home.scss'
import { DateRangePicker } from 'react-dates';


const START_DATE = 'startDate';
const END_DATE = 'endDate';

const propTypes = {
  autoFocus: PropTypes.bool,
  autoFocusEndDate: PropTypes.bool,
  initialStartDate: momentPropTypes.momentObj,
  initialEndDate: momentPropTypes.momentObj

}

class DateRange extends Component {

constructor(props) {
    super(props)

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

render() {

const { focusedInput, startDate, endDate } = this.state;

	return (

  <DateRangePicker daySize={26} autoFocus
  startDate={this.state.startDate} 
  startDateId="FromDate" 
  endDate={this.state.endDate} 
  endDateId="ToDate" 
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
  verticalSpacing = {80}
  navPrev ="<" 
  navNext =">"
  small ="true"
  withPortal = "true"

/>
)
}

}

export default DateRange 

