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

      componentWillMount() {
        this.setState({hotel:  window.store.getState().selectedHotel.h})
      }

      componentWillReceiveProps(nextProps) {
        this.setState({
          hotel: window.store.getState().selectedHote.h })
      }

      handleClick=() => {
          window.store.dispatch(addBooking(window.store.getState().selectedHotel.h))
          this.props.history.push('/payment');
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
                                        <h4 class= "theColor">Address: {this.state.hotel.location.display_address}</h4>
                                        <h3 class= "theColor">Price: ${this.state.hotel.price}</h3>
                                        <h3>Reviews: {this.state.hotel.review_count}</h3>
                                        <h3>Rating: {this.state.hotel.rating}</h3>
                                        <a href={this.state.hotel.url} target="_blank"><img className="yelpImg" src="https://cdn.worldvectorlogo.com/logos/yelp.svg" /> </a>
                                    <Button bsStyle="bookNow" onClick={this.handleClick}>Book Now!</Button>
                                </Col>
                                <Col md={6}>
                                <GoogleMap  />
                                </Col>

                            </Row>

                        </Grid>
                            </div>

                </div>


        );
    }
}

export default Detailed;
