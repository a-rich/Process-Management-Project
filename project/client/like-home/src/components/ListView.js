import React from 'react'
import { Component } from 'react'
import {ListGroup, ListGroupItem, Grid, Row, Col, Button, buttonStyle, Checkbox, Glyphicon} from 'react-bootstrap'
import '../stylesheets/ListView.scss'
import {searchHotels} from '../actions/Search'

class ListView extends Component {

  constructor(props) {
    console.log(window.store.getState().searchResults.searchResults)
    super(props);
   
    
    this.state = {
        items: [ [].concat.apply([], window.store.getState().searchResults.searchResults)
        ]
    };
  }

  render() {
    
 return(
     <Grid>
        <ListGroup>
          <ListGroupItem>

          {this.state.items[0].map((item, index) => {
            return (
              <div id="eachHotel" class="box">
                  <Grid align="left">
                  
                  <Row id="hotelImageDescriptionPrice">
                    <Col xs={6} md={3}>
                      <Row id="hotelName">
                        {item.name}
                      </Row>
                      <Row id="hotelAddress">
                        {item.address}
                      </Row>
                      <Row>
                        <img src={item.image_url} height={150} width={ 150 }/>
                      </Row>
                    </Col>
                    <Col xs={6} md={3}>{item.description}</Col>
                    <Col xs={6} md={3}>
                        <Row>${item.price}</Row>
                        <Row><Button bsStyle="default" bsSize="small">Details</Button></Row>
                    </Col>
                  </Row>
                  </Grid>
              </div>
            )
          })}
          </ListGroupItem>
        </ListGroup>
    </Grid>
 )
}
};
export default ListView;