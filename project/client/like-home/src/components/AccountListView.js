import React from 'react'
import { Component } from 'react'
import {ListGroup, ListGroupItem, Grid, Row, Col, Button, buttonStyle, Checkbox , Glyphicon} from 'react-bootstrap'
import '../stylesheets/ListView.scss'

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
      items: window.store.getState().reservations  })
  }

  cancelReservation = (item) => {
    console.log("HIT ME: ", item)
  }

  render() {
 return(
     <div>
        <ListGroup>
          <ListGroupItem>

          {this.state.items.map((item, index) => {
            return (
              <div id="eachHotel" class="box">
                  <Grid>
                    <Row>
                      <Col md={4}>
                      <div id="hotelImage">
                          <img className="reservationImg" src={item.hotel.image_url}/>
                        </div>
                        </Col>

                        <Col md={6}>
                          <div id="hotelName">
                            <h4>{item.hotel.name}</h4>
                          </div>
                          <div id="hotelAddress">
                            {item.hotel.location.display_address}
                          </div>
                          <a href={item.hotel.url} target="_blank"><img className="yelpImg" src="https://cdn.worldvectorlogo.com/logos/yelp.svg" /> </a>
                        </Col>
                      
                      <Col md={2}>
                          <Row id="price"><h3>{item.price}</h3></Row>
                          <Row><Button id="detailButton" bsStyle="danger" onClick={this.cancelReservation.bind(this, item.hotel)}>Cancel</Button></Row>
                      </Col>
                    </Row>
                  </Grid>
              </div>
            )
          })}
          </ListGroupItem>
        </ListGroup>
    </div>
 )
}
};
export default AccountListView;
