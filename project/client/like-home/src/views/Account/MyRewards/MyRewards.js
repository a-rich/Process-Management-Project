import React, { Component } from 'react'
import './MyRewards.scss'
import Stampcard from  '../../../components/Stampcard'

class MyRewards extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }

    render() {
        return (
            <div class="MyRewardsContainer">
            <h2>My Rewards</h2>
            <Stampcard />
          </div>
        );
    }
}

export default MyRewards;
