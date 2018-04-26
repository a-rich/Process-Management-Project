import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './Detailed.scss';
import {ListGroup, ListGroupItem, Grid, Row, Col, Button, buttonStyle, Checkbox , Glyphicon, Carousel} from 'react-bootstrap';
import Carousels from '../../components/Carousels'

class Detailed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {'name':"New York",
                'address': "1234 NYC Ave",
                  'description': "Experience this all-suite boutique hotel and enjoy an exclusive non-gaming, smoke-free stay known for its sustainable environment",
                  'price': "$99",
                'photo': "https://d1ic4altzx8ueg.cloudfront.net/finder-au/wp-uploads/2016/02/LasVegasSign.Shutterstock-250x250.jpg"
                } ]
        };
      }

      handleClick=() => {
          this.props.history.push('/payment');
      }

    render() {
        return (
            <div class="detailPic">
            <Carousels />

            {this.state.items.map((item, index) => {
            return (
                <div id="hotelDetails"> 
                <h2>{item.name}</h2>
                <b>Address:</b> {item.address}
                <h3>Description</h3>{item.description} 
                <h4>{item.price}</h4>
                
                <Button onClick={this.handleClick}>Book Now!</Button>
                </div>

            )
            })}
            
          </div>

          

        );
    }
}


export default Detailed;
