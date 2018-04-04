import React, { Component } from 'react';
import {ListGroup, ListGroupItem, Grid, Row, Col, Button, buttonStyle, Checkbox , Glyphicon} from 'react-bootstrap';
import './Listview.scss';
import Calendar from 'react-icons/lib/fa/calendar'
import MdLocationOn from 'react-icons/lib/md/location-on'
import TiLocationOutline from 'react-icons/lib/ti/location-outline'
import Bed from 'react-icons/lib/fa/bed'
import FaDollar from 'react-icons/lib/fa/dollar'
import Search from 'react-icons/lib/fa/search'
import Autocomplete from '../../components/Autocomplete'
import DateRange from '../../components/DateRange'

const locations = [
    "chicago",
    "san francisco",
    "los angeles",
    "san jose",
    "washington",
    "new york",
    "miami",
    "las vegas"
]

class Listview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {'name':"Las Vegas",
                  'address': "1234 Las Vegas Ave, LV",
                  'description': "What happens in Vegas, stays in Vegas.",
                  'price': "$99",
                  'photo': "https://d1ic4altzx8ueg.cloudfront.net/finder-au/wp-uploads/2016/02/LasVegasSign.Shutterstock-250x250.jpg"
                },
                {
                    'name':"Tokyo",
                  'address': "1234 Tokyo Ave, LV",
                  'description': "Hello",
                  'price': "$99",
                  'photo': "http://www.mylittleworldtour.com/wp-content/uploads/tokyo-kapak.jpg"
                },
                {'name':"Las Vegas",
                  'address': "1234 Las Vegas Ave, LV",
                  'description': "What happens in Vegas, stays in Vegas.",
                  'price': "$99",
                  'photo': "https://d1ic4altzx8ueg.cloudfront.net/finder-au/wp-uploads/2016/02/LasVegasSign.Shutterstock-250x250.jpg"
                },
                {
                'name':"Tokyo",
              'address': "1234 Tokyo Ave, LV",
              'description': "Hello",
              'price': "$99",
              'photo': "http://www.mylittleworldtour.com/wp-content/uploads/tokyo-kapak.jpg"
            }

            ]
        };
      }

    render() {
      return (
        <div class="contentListView">
            <div id="SearchBar" class="searchContain">
              <form onSubmit={this.submit} class="mainbar">
                  <div class="form-row">
                      <div class="inputs-row">
                          <label class="location-input">
                              <MdLocationOn class="icon-size" />
                              <Autocomplete options={locations} placeholder="Where To?" ref="location" required />
                          </label>

                          <label class="date-input">
                              <Calendar class="icon-size" />
                              <DateRange />
                          </label>

                          <label class="price-input">
                              <FaDollar class="icon-size" />
                              <input id="Min-price" type="number" class="price-text" placeholder="Min?" ref="Min" required />
                              <input id="Min-price" type="number" class="price-text" placeholder="Max?" ref="Max" required />
                          </label>

                          <label class="room-input" >
                              <Bed class="icon-size" />
                                  <select class="room-text" ref="roomNum" >
                                      <option value="one">1</option>
                                      <option value="two">2</option>
                                      <option value="three">3</option>
                                      <option value="4plus">4+</option>
                                  </select>
                          </label>

                          <label>
                              <button class="search"> <Search class="search-icon" /> </button>
                          </label>

                        </div>
                  </div>
              </form>
        </div>

        <div class="BottomListViewContainer" align="center">
            <div className="col-md-2">
                <div>
                    <ListGroup>
                        <ListGroupItem header="Hotel Name">
                            <input placeholder="Hotel name..." class="borderline"></input>
                            <button type="submit" class="searchHotel"> Go </button>
                        </ListGroupItem>

                        <ListGroupItem header="Additional Filter">
                            <dl>
                                <dt><Checkbox>swimming pool</Checkbox></dt>
                                <dt><Checkbox>Free Breakfast</Checkbox></dt>
                                <dt><Checkbox>Free Parking</Checkbox></dt>
                                <dt><Checkbox>Free Wifi</Checkbox></dt>
                                <dt><Checkbox>Pet Friendly</Checkbox></dt>
                             </dl>
                        </ListGroupItem>

                        <ListGroupItem header="Rating">
                              <dl>
                                <dt><Checkbox><Glyphicon glyph="star"/><Glyphicon glyph="star"/><Glyphicon glyph="star"/><Glyphicon glyph="star"/><Glyphicon glyph="star"/></Checkbox></dt>
                                <dt><Checkbox><Glyphicon glyph="star"/><Glyphicon glyph="star"/><Glyphicon glyph="star"/><Glyphicon glyph="star"/></Checkbox></dt>
                                <dt><Checkbox><Glyphicon glyph="star"/><Glyphicon glyph="star"/><Glyphicon glyph="star"/></Checkbox></dt>
                                <dt><Checkbox><Glyphicon glyph="star"/><Glyphicon glyph="star"/></Checkbox></dt>
                                <dt><Checkbox><Glyphicon glyph="star"/></Checkbox></dt>
                              </dl>
                        </ListGroupItem>

                    </ListGroup>
                </div>
            </div>

            <div className="col-md-8">
                  <ListGroup>
                      <ListGroupItem>

                      {this.state.items.map((item, index) => {
                        return (
                          <div id="eachHotel" class="box">
                              <Grid align="left">
                              <Row id="hotelName">{item.name}</Row>
                              <Row id="hotelAddress">{item.address}</Row>
                              <Row id="hotelImageDescriptionPrice">
                                    <Col xs={6} md={3}><img src={item.photo} height={150} width={ 150 }/></Col>
                                    <Col xs={6} md={3}>{item.description}</Col>
                                    <Col xs={6} md={3}>
                                        <Row>{item.price}</Row>
                                        <Row><Button bsStyle="primary" bsSize="small">Details</Button></Row>
                                    </Col>
                              </Row>
                              </Grid>
                          </div>
                        )
                      })}



                      </ListGroupItem>
                  </ListGroup>
            </div>
        </div>


        </div>
      );
    }
  }



export default Listview;
