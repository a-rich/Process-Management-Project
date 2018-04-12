import React, { Component } from 'react'
import './Account.scss'
import scrollToComponent from 'react-scroll-to-component'
import {Grid, Row, Col, Button} from 'react-bootstrap'
<<<<<<< HEAD
=======
import MyBookings from './MyBookings/MyBookings'
import MyRewards from './MyRewards/MyRewards'
import MyFavorites from './MyFavorites/MyFavorites'
import UserInfo from './UserInfo/UserInfo'
>>>>>>> front-end-master

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
                <Button block bsClass="accountButton" onClick={() => scrollToComponent(this.MyUserInfo, { offset: 0, align: 'top', duration: 1500 })}>User Info</Button>
                <Button block bsClass="accountButton" onClick={() => scrollToComponent(this.MyBookings, { offset: 0, align: 'top', duration: 1500})}>My Bookings</Button>
                <Button block bsClass="accountButton" onClick={() => scrollToComponent(this.MyRewards, { offset: 0, align: 'top', duration: 1500})}>Rewards</Button>
                <Button block bsClass="accountButton" onClick={() => scrollToComponent(this.MyFavorites, { offset: 0, align: 'top', duration: 1500 })}>Favorites</Button>
            </div>
            <Grid>
            
                <Row>
<<<<<<< HEAD
                    <Col sm={2} md={2} lg={2}>
                        
                        <div className="sideBar">
                            <Button block bsClass="accountButton" onClick={() => scrollToComponent(this.MyBookings, { offset: 0, align: 'top', duration: 1500})}>My Bookings</Button>
                            <Button block bsClass="accountButton" onClick={() => scrollToComponent(this.MyRewards, { offset: 0, align: 'top', duration: 1500})}>Rewards</Button>
                            <Button block bsClass="accountButton" onClick={() => scrollToComponent(this.MyFavorites, { offset: 0, align: 'top', duration: 1500 })}>Favorites</Button>
                            <Button block bsClass="accountButton" onClick={() => scrollToComponent(this.MyUserInfo, { offset: 0, align: 'top', duration: 1500 })}>User Information</Button>
                        </div>
                    </Col>
                    <Col sm={10} md={10} lg={10}>
=======
                    <Col xsOffset={2} smOffset={1} mdOffset={0} lgOffset={0}>
>>>>>>> front-end-master
                        <div className="accountViewContainer">
                            <section className='MyUserInfo borderColored' ref={(section) => { this.MyUserInfo = section; }}>
                                <UserInfo />
                            </section>
                            <section className='MyBookings borderColored' ref={(section) => { this.MyBookings = section; }}>
                                <MyBookings />
                            </section>
                            <section className='MyRewards borderColored' ref={(section) => { this.MyRewards = section; }}>
                                <MyRewards />
                            </section>
                            <section className='MyFavorites borderColored' ref={(section) => { this.MyFavorites = section; }}>
                                <MyFavorites />
                            </section>
<<<<<<< HEAD
                            
                            <section className='MyRewards' ref={(section) => { this.MyRewards = section; }}>
                                <h4>Rewards</h4>
                            </section>

                            <section className='MyFavorites' ref={(section) => { this.MyFavorites = section; }}>
                                <h4>Favorites</h4>
                            </section>

                            <section className='MyUserInfo' ref={(section) => { this.MyUserInfo = section; }}>
                                <h4>User Information</h4>
                            </section>


=======
>>>>>>> front-end-master
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