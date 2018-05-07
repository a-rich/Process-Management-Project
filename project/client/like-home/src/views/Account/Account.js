import React, { Component } from 'react'
import scrollToComponent from 'react-scroll-to-component'
import {Grid, Row, Col, Button} from 'react-bootstrap'
import MyBookings from './MyBookings/MyBookings'
import MyRewards from './MyRewards/MyRewards'
import MyFavorites from './MyFavorites/MyFavorites'
import UserInfo from './UserInfo/UserInfo'
import './Account.scss'

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }

      componentDidMount() {
        scrollToComponent(this.MyUserInfo, { offset: 0, align: 'middle', duration: 1500, ease: 'inCirc'});
      }
     

    render() {
        return (
            <div class="accountResultContainer">
                <div className="sideBar">
                    <Button block bsClass="accountButton" onClick={() => scrollToComponent(this.MyBookings, { offset: 0, align: 'top', duration: 1500})}>My Bookings</Button>
                    <Button block bsClass="accountButton" onClick={() => scrollToComponent(this.MyRewards, { offset: 0, align: 'top', duration: 1500})}>Rewards</Button>
                </div>
                <Grid>
                
                    <Row>
                        <Col xsOffset={2} smOffset={1} mdOffset={0} lgOffset={0}>
                            <div className="accountViewContainer">
                                <section className='MyBookings borderColored' ref={(section) => { this.MyBookings = section; }}>
                                    <MyBookings />
                                </section>
                                <section className='MyRewards borderColored' ref={(section) => { this.MyRewards = section; }}>
                                    <MyRewards />
                                </section>
                            </div>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </Grid>
            
          </div>
        );
    }
}

export default Account;