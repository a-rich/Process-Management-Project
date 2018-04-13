import React, { Component } from 'react'
import './UserInfo.scss'
import ProfileInfo from '../../../components/ProfileInfo'
import { Grid, Row, Col, Button } from 'react-bootstrap';

class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }

    render() {
        return (
            <Grid bsClass="UserInfoContainer">
                <Row>
                    <Col md={10}>
                        <h2>Account Info</h2> 
                    </Col>
                    <Col md={2}>
                        <h4>Update Info</h4>                
                        <ProfileInfo /> <br></br>
                        <Button>
                        Update
                        </Button>
                    </Col>
                </Row>
        
          </Grid>
        );
    }
}

export default UserInfo;