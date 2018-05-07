import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './Detailed.scss'
import {ListGroup, ListGroupItem, Grid, Row, Col, Button, buttonStyle, Checkbox , Glyphicon, Carousel} from 'react-bootstrap';
import Carousels from '../../components/Carousels'
import PropTypes from 'prop-types'
import { connect as reduxConnect } from 'react-redux'
import store from '../../store'
import GoogleMap from '../../components/GoogleMap'
import {addBooking} from '../../actions.js'
import moment from 'moment'
import 'react-dates/initialize'
import {  DateRangePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

const mapStateToProps = () => ({

  })

  const mapDispatchToProps = dispatch => {
    return {

    }
  }

class Detailed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotel: [
             ],
             date: moment()
        };
      }

      static propTypes = {
        selectedHotel: PropTypes.func.isRequired
      }

      static defaultProps = {
        hotel: new Map()
      }

      datesOverlap(StartA, StartB, EndA, EndB) {
        return (StartA > StartB? StartA: StartB) <= (EndA < EndB? EndA: EndB)
    }

      formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
    
        return [year, month, day].join('-');
    }

     daysDiff (d1, d2) {
        var diff = Date.parse(d2) - Date.parse(d1);
        return Math.floor(diff / 86400000);
    }

      componentWillMount() {
        this.setState({hotel:  window.store.getState().selectedHotel.h})
      }

      componentWillReceiveProps(nextProps) {
        this.setState({
          hotel: window.store.getState().selectedHote.h })
      }

      handleClick=() => {
          let reservations = window.store.getState().reservations
          var overlap = false
          var sDate = this.formatDate(this.state.startDate)
          var eDate = this.formatDate(this.state.endDate)
          var totalDays = this.daysDiff(this.formatDate(this.state.startDate), this.formatDate(this.state.endDate))
          var price = window.store.getState().selectedHotel.h.price*totalDays
         
        for(var r = 0; r < reservations.length; r++) {
            overlap = this.datesOverlap(sDate, reservations[r].startDate, eDate, reservations[r].endDate)
            console.log(overlap)
        }
        if(!overlap) {
            window.store.dispatch(addBooking(window.store.getState().selectedHotel.h, sDate, eDate, price))
            this.props.history.push('/payment');
        }
        else{
            window.alert("You already have a reservation within the selected date range.");
        }
      }

    render() {
        const { selectedHotel } = this.state;
        console.log(this.state.hotel)
        return (
                    <div class="detailPic">
                    <Carousels />

                        <div id="hotelDetails" class= "boxRadius">
                        <Grid>
                            <Row> 
                                <Col md={6}> 
                                    <h3>{this.state.hotel.name}</h3> 
                                    <h3>Phone number: {this.state.hotel.phone}</h3> 
                                        <h4 class= "theColor">Address: {this.state.hotel.location.address1} {this.state.hotel.location.city} {this.state.hotel.location.state} {this.state.hotel.location.zip_code}</h4> 
                                        <h3 class= "theColor">Price: ${this.state.hotel.price}</h3> 
                                        <h3>Reviews: {this.state.hotel.review_count}</h3> 
                                        <h3>Rating: {this.state.hotel.rating}</h3>                    
                                        <a href={this.state.hotel.url} target="_blank"><img className="yelpImg" src="https://cdn.worldvectorlogo.com/logos/yelp.svg" /> </a> 
                                    
                                </Col>  
                                <Col md={6}> 
                                    <GoogleMap  /> 
                                </Col> 
                            </Row> 
                            <Row>
                                <Col md={4}> 
                                        <div> 
                                        <h4>Enter Date</h4> 
                                        <DateRangePicker 
                                        startDateId="startDate" 
                                        endDateId="endDate" 
                                        startDate={this.state.startDate} 
                                        endDate={this.state.endDate} 
                                        onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate })}} 
                                        focusedInput={this.state.focusedInput} 
                                        onFocusChange={(focusedInput) => { this.setState({ focusedInput })}} 
                                        /> 
                                        </div> 
                                </Col>
                            <Col md={1}> 
                                    <div className="bookNowContainer"> 
                                    { this.state.startDate && this.state.endDate ? <Button bsStyle="bookNow zoomHover" onClick={this.handleClick}>Book Now!</Button>  : null } 
                                    </div> 
                                </Col> 
                            </Row>

                        </Grid>
                            </div>

                </div>


        );
    }
}

export default Detailed;
