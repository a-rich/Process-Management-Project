import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom';
import {ListGroup, ListGroupItem, Grid, Row, Col, Button, buttonStyle, Checkbox , Glyphicon, Carousel} from 'react-bootstrap';
import '../stylesheets/ListView.scss'
import {searchHotels, showHotelRooms} from '../actions/Search'
import { setSearchResults } from '../actions.js'
import { connect as reduxConnect } from 'react-redux'
import store from '../store'

const mapStateToProps = (searchHotels) => ({
  searchHotels
})

const mapDispatchToProps = dispatch => {
  return {
    setSearchResults(results) {
      dispatch(searchHotels)
    }
  }
}

class ListView extends Component {
  constructor(props) {
    console.log(window.store.getState().searchResults.searchResults)
    super(props);
   
    this.state = {
        items: [ 
        ]
    };
  }

  static propTypes = {
    searchHotels: PropTypes.func.isRequired
  }

  static defaultProps = { 
    items: new Map()
  }
    showDetail= (e, id) => {
      console.log(e);
      showHotelRooms(e);
      this.props.history.push('/Detailed');
  }

  componentWillMount() {
    this.setState({items: [ [].concat.apply([], window.store.getState().searchResults.searchResults.slice(1, 20))
    ]})
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
                      <h4 className="hotelNameHeader">{item.name}</h4>
                      </Row>
                      <Row id="hotelAddress">
                       {item.address}
                      </Row>
                      <Row>
                      Rating: {item.rating}
                      </Row>
                      <Row>
                        <img src={item.image_url === null ? 'http://www.ebuzzingvideo.com/banniere/radisson/rad6.jpg' : item.image_url} height={150} width={ 150 }/>
                      </Row>
                    </Col>
                    <Col xs={6} md={3}>{item.description}</Col>
                    <Col xs={6} md={3}>
                        <Row>${item.price}</Row>
                        <Row><Button bsStyle="default" bsSize="small" onClick={this.showDetail.bind(this, item.id)}>Details</Button></Row>
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
export default withRouter(reduxConnect(mapStateToProps, mapDispatchToProps)(ListView))
