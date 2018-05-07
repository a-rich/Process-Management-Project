import React, { Component } from 'react'
import './MyRewards.scss'

class MyRewards extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }

    render() {
        return (
            <div class="MyRewardsContainer">
            
            <h2>REWARD POINTS: {window.store.getState().rewards}</h2>
          </div>
        );
    }
}

export default MyRewards;
