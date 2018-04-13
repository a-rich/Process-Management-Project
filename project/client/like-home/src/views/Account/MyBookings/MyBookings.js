import React, { Component } from 'react'
import './MyBookings.scss'
import ListView from '../../../components/ListView'
import { Grid, Row, Col } from 'react-bootstrap'

class MyBookings extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }

    render() {
        return (
            <Grid>
                <Row>
                    <Col>
                        <div class="MyBookingsContainer">
                            <h2>MyBookings</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ListView />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default MyBookings;