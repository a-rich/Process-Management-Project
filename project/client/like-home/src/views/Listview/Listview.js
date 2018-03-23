import React, { Component } from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import './Listview.scss';


class Listview extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }

    render() {
        return (
            <div class="listViewContainer">
            <h2>ListView</h2>
          </div>
        );
    }
}

export default Listview;