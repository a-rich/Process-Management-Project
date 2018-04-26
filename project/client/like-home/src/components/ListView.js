import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import {ListGroup, ListGroupItem, Grid, Row, Col, Button, buttonStyle, Checkbox , Glyphicon, Carousel} from 'react-bootstrap';
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
    handleClick=() => {
      this.props.history.push('/Detailed');
  }


  render() {
 return(
     <Grid>
        <ListGroup>
          <ListGroupItem id="hotel">

          {this.state.items.map((item, index) => {
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
                      <Row id="hotelImage">
                        <img src={item.photo}/>
                      </Row>
                    </Col>
                    
                    <Col xs={6} md={4} id="hotelDescrip">{item.description}</Col>
                    
                    <Col xs={6} md={1}>
                        <Row id="price"><h3>{item.price}</h3></Row>
                        <Row><Button onClick={this.handleClick}>Details</Button></Row>
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