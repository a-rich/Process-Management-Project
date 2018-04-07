import React, { Component } from 'react'
import './MyBookings.scss'
import ListView from '../../../components/ListView'

class MyBookings extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }

    render() {
        return (
            <div class="MyBookingsContainer">
                <h2>MyBookings</h2>
                <ListView />
            </div>
        );
    }
}

export default MyBookings;