import React, { Component } from 'react';

class Stampcard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalNights : 4
        };
      }

    render() {
        return (
            <div>
              <img src = {require('../images/StampCard' + this.state.totalNights + '.png')}/>
            </div>
        );
    }
}

export default Stampcard;
