import React, { Component } from 'react';
import './Detailed.scss';
import {ListGroup, ListGroupItem, Grid, Row, Col, Button, buttonStyle, Checkbox , Glyphicon, Carousel} from 'react-bootstrap';
import Carousels from '../../components/Carousels'

class Detailed extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }

    render() {
        return (
            <div class="detailPic">
            {/* <Grid>
                <Row>
                    <Col> */}
            <Carousels />
                    {/* </Col>
                </Row>
            </Grid> */}
          </div>
        );
    }
}


export default Detailed;
