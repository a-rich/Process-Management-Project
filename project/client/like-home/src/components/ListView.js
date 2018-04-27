import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {ListGroup, ListGroupItem, Grid, Row, Col, Button, buttonStyle, Checkbox, Glyphicon} from 'react-bootstrap'
import '../stylesheets/ListView.scss'
import {searchHotels} from '../actions/Search'
import { setSearchResults } from '../actions.js'

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
  static propTypes = {
    searchHotels: PropTypes.func.isRequired
  }

  static defaultProps = { 
    items: new Map()
  }

  state = {
    items: [ ]
}

componentWillMount() {
this.setState({
  items: [[].concat.apply([], window.store.getState().searchResults.searchResults.slice(1, 20))]})
}

componentDidMount() {
  console.log("componentDidMount")
}

componentWillReceiveProps() {
  console.log("componentWillReceiveProps")
}

componentDidUpdate() {
  console.log("componentDidUpdate")
}

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { items } = this.state
    console.log("ITESMS",items)
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
export default connect(mapStateToProps, mapDispatchToProps) (ListView);