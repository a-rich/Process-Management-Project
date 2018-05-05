import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './Detailed.scss'
import {ListGroup, ListGroupItem, Grid, Row, Col, Button, buttonStyle, Checkbox , Glyphicon, Carousel} from 'react-bootstrap';
import Carousels from '../../components/Carousels'
import store from '../../store'

class Detailed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
             ],
        };
      }

      handleClick=() => {
          this.props.history.push('/payment');
      }

    render() {
        console.log(this.state.items)

        return (
            <div class="detailPic">
            <Carousels />
            <Button bsStyle="bookNow" onClick={this.handleClick}>Book Now!</Button>
            {this.state.items.map((item, index) => {
                console.log("index", index)

            return (
                <div id="hotelDetails" class= "boxRadius">
                    <h3>Room: {this.state.roomIndex++} </h3>
                    <h4 class= "theColor">${item.price}</h4>
                    <dt><Glyphicon glyph="star"/><Glyphicon glyph="star"/><Glyphicon glyph="star"/><Glyphicon glyph="star"/><Glyphicon glyph="star"/></dt>
                    <Button bsStyle="bookNow" onClick={this.handleClick}>Book Now!</Button>
                </div>

            )
            })}

          </div>



        );
    }
}

export default Detailed;
