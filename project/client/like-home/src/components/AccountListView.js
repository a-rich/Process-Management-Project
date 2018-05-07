import React from 'react'
import { Component } from 'react'
import {ListGroup, ListGroupItem, Grid, Row, Col, Button, buttonStyle, Checkbox , Glyphicon} from 'react-bootstrap'
import '../stylesheets/ListView.scss'
import {cancelBooking, selectedHotel, redeemReward} from '../actions.js'
import { connect as reduxConnect } from 'react-redux'
import {withRouter} from 'react-router-dom'

const mapStateToProps = () => ({
})

const mapDispatchToProps = dispatch => {
  return {
    
  }
}

class AccountListView extends Component {

  constructor(props) {
    super(props);
    this.state = {
        items: [
        ]
    };
  }

  componentWillMount() {
    this.setState({items:  window.store.getState().reservations })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      items: window.store.getState().reservations })
  }

  cancelReservation = (item) => {
    console.log("CANCEL", item)
    if(window.confirm("Are you sure you want to cancel? You will be charged a $50 cancellation fee.")){
      window.store.dispatch(cancelBooking(item))
      window.store.dispatch(redeemReward(parseInt(item.price)/10))
      window.location.reload(true)
    }
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

showDetail = (h, id) => {
  window.store.dispatch(selectedHotel({h}))
  this.props.history.push('/Detailed');
}

 daysDiff (d1, d2) {
    var diff = Date.parse(d2) - Date.parse(d1);
    return Math.floor(diff / 86400000);
}

formatSmallDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear().toString().substr(-2);

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [month, day, year].join('-');
}

daysDiff (d1, d2) {
  var diff = Date.parse(d2) - Date.parse(d1);
  return Math.floor(diff / 86400000);
}

  render() {
 return(
     <div>
     { window.store.getState().reservations.length === 0 ?  <h2>You have no reservations at this time</h2>  : 
                           
        <ListGroup>
          <ListGroupItem>
          
          {this.state.items.map((item, index) => {
            return (
              <div id="eachHotel" class="box">
                  <Grid>
                    <Row>
                      <Col md={4} lg={4}>
                      <div id="hotelImage">
                          <img className="reservationImg zoomHover" src={item.hotel.image_url} onClick={this.showDetail.bind(this, item.hotel)}/>
                        </div>
                        </Col>

                        <Col md={4} lg={4}>
                          <div id="hotelName">
                            <h4>{item.hotel.name}</h4>
                          </div>
                          <div id="hotelAddress">
                     {item.hotel.location.address1} {item.hotel.location.city} {item.hotel.location.state} {item.hotel.location.zip_code}    
                          </div>
                          <a href={item.hotel.url} target="_blank"><img className="yelpImg" src="https://cdn.worldvectorlogo.com/logos/yelp.svg" /> </a>
                        </Col>

                        <Col md={3} lg={3}>
                        <h4>{this.formatSmallDate(item.startDate)} to {this.formatSmallDate(item.endDate)}</h4>
                          <h4>{this.daysDiff(this.formatDate(item.startDate), this.formatDate(item.endDate))} days</h4>
                          <Row id="price"><h3>${item.price}</h3></Row>
                          <Row><Button id="detailButton" bsStyle="danger" onClick={this.cancelReservation.bind(this, item)}>Cancel</Button></Row>
                      </Col>
                    </Row>
                  </Grid>
              </div>
            )
          })}
          </ListGroupItem>
        </ListGroup>
        }
    </div>
 )
}
};
export default withRouter(reduxConnect(mapStateToProps, mapDispatchToProps)(AccountListView))