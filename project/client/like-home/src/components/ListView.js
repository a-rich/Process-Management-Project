import React from 'react'
import { Component } from 'react'
import {ListGroup, ListGroupItem, Grid, Row, Col, Button, buttonStyle, Checkbox , Glyphicon} from 'react-bootstrap'
import '../stylesheets/ListView.scss'

class ListView extends Component {

  constructor(props) {
    super(props);
    this.state = {
        items: [
            {'name':"Las Vegas",
            'address': "1234 Las Vegas Ave",
              'description': "Experience this all-suite boutique hotel and enjoy an exclusive non-gaming, smoke-free stay known for its sustainable environment",
              'price': "$99",
            'photo': "https://d1ic4altzx8ueg.cloudfront.net/finder-au/wp-uploads/2016/02/LasVegasSign.Shutterstock-250x250.jpg"
            },
            {'name':"Miami",
            'address': "1234 Miami Ave",
              'description': "Experience this all-suite boutique hotel and enjoy an exclusive non-gaming, smoke-free stay known for its sustainable environment",
              'price': "$99",
            'photo': "http://www.djoybeat.com/wp-content/uploads/2014/07/miami3-250x250.jpg"
            },
            {'name':"Italy",
            'address': "1234 Italy Ave",
              'description': "Experience this all-suite boutique hotel and enjoy an exclusive non-gaming, smoke-free stay known for its sustainable environment",
              'price': "$99",
            'photo': "http://uncarvedblocktraveler.com/wp-content/uploads/2015/09/rome-italy-250x250.jpg"
            },
            {
            'name': "Malaysia",
            'address': "1234 Malaysia Ave",
              'description': "Experience this all-suite boutique hotel and enjoy an exclusive non-gaming, smoke-free stay known for its sustainable environment",
              'price': "$99",
            'photo': "https://i.pinimg.com/736x/2d/b4/8a/2db48a923748bd647190bfb6adbc9f4c--dream-vacations-vacation-places.jpg"
            }
        ]
    };
  }

  render() {
 return(
     <Grid>
        <ListGroup>
          <ListGroupItem>

          {this.state.items.map((item, index) => {
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
                        <img src={item.photo} height={150} width={ 150 }/>
                      </Row>
                    </Col>
                    <Col xs={6} md={3}>{item.description}</Col>
                    <Col xs={6} md={3}>
                        <Row>{item.price}</Row>
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