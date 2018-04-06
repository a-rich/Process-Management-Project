import React, { Component } from 'react'
import './Account.scss'
import scrollToComponent from 'react-scroll-to-component'
import {Grid, Row, Col, Button} from 'react-bootstrap'

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }

      componentDidMount() {
        scrollToComponent(this.Blue, { offset: 0, align: 'middle', duration: 500, ease: 'inCirc'});
      }
     

    render() {
        return (
            <div class="accountResultContainer">
            <h2>Account</h2>
            <Grid>
                <Row>
                    <Col sm={2} md={2} lg={2}>
                        
                        <div className="sideBar">
                            <Button block bsClass="accountButton" onClick={() => scrollToComponent(this.MyBookings, { offset: 0, align: 'top', duration: 1500})}>My Bookings</Button>
                            <Button block bsClass="accountButton" onClick={() => scrollToComponent(this.MyRewards, { offset: 0, align: 'top', duration: 1500})}>Rewards</Button>
                            <Button block bsClass="accountButton" onClick={() => scrollToComponent(this.MyFavorites, { offset: 0, align: 'top', duration: 1500 })}>Favorites</Button>
                            <Button block bsClass="accountButton" onClick={() => scrollToComponent(this.MyUserInfo, { offset: 0, align: 'top', duration: 1500 })}>User Information</Button>
                        </div>
                    </Col>
                    <Col sm={10} md={10} lg={10}>
                        <div className="accountViewContainer">
                            <section className='MyBookings' ref={(section) => { this.MyBookings = section; }}>
                                <h4>MyBookings</h4>
                            </section>
                            
                            <section className='MyRewards' ref={(section) => { this.MyRewards = section; }}>
                                <h4>Rewards</h4>
                            </section>

                            <section className='MyFavorites' ref={(section) => { this.MyFavorites = section; }}>
                                <h4>Favorites</h4>
                            </section>

                            <section className='MyUserInfo' ref={(section) => { this.MyUserInfo = section; }}>
                                <h4>User Information</h4>
                            </section>
                        </div>
                    </Col>
                </Row>
            </Grid>
          </div>
        );
    }
}

export default Account;