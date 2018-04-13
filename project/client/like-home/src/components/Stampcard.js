import React, { Component } from 'react';


  var totalNights = 0;


class Stampcard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }

    render() {
        return (
            <div>
              <img src = {require('../images/StampCard' + totalNights + '.png')}/>
            </div>
        );
    }
}

export default Stampcard;
