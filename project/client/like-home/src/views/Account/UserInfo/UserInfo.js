import React, { Component } from 'react'
import './UserInfo.scss'
import ProfileInfo from '../../../components/ProfileInfo'
import { Button } from 'react-bootstrap';

class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }

    render() {
        return (
            <div class="UserInfoContainer">
                <h2>User Information</h2>
                <ProfileInfo /> <br></br>
                <Button>
                    Update
                </Button>
          </div>
        );
    }
}

export default UserInfo;