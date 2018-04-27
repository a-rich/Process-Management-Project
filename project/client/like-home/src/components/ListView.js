import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import {ListGroup, ListGroupItem, Grid, Row, Col, Button, buttonStyle, Checkbox , Glyphicon, Carousel} from 'react-bootstrap';
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
    handleClick=() => {
      this.props.history.push('/Detailed');
  }


  render() {
    
 return(
     <Grid>
        <ListGroup>
          <ListGroupItem id="hotel">

          {this.state.items[0].map((item, index) => {
            return (
              <div class="box">
                  <Grid>
                  
                    <Col xs={6} md={2}>
                      <Row id="hotelName">
                        <h4>{item.name}</h4>
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
export default withRouter(ListView);
