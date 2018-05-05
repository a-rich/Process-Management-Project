import React, { Component } from 'react';
import CardSection from '../components/CardSection';
import {injectStripe} from 'react-stripe-elements';
import {Grid, Row, Col} from 'react-bootstrap';



class PaymentForm extends Component {
    constructor(props) {
    super(props);
        this.state = {
            name: 'Name',
            card: 'Card Number',
            exp: 'Expiration',
            cvc: 'CVC',
            roomNum: localStorage.getItem('roomNum'),
            startDate: localStorage.getItem('startDate'),
            endDate: localStorage.getItem('endDate')
        }
        this.updateState = this.updateState.bind(this);
      };

      updateState(e) {
          this.setState({name: e.target.value});
      }

    render() {
        return (

      <div id="paymentForm">

        <br />  <br />
        <br />  <br />
        <h3>Here's Your Total!</h3>

        <form>
        <Grid><Row>
        Price per night per room = 
        </Row>
        <Row>
        Number of Nights 
        </Row>
        <Row>
        From = {this.state.startDate}
        </Row>
        <Row>
        To = {this.state.endDate}
        </Row>
        <Row>
        Number of Rooms = {this.state.roomNum}
        </Row>

        Total = 
        <br />  <br />
        <br />  <br />

        </Grid>

        </form>
     


        <form>
        <Grid><Row>
        <Col>

        <input type = 'text' id='nameBox' value = {this.props.name}
            onChange = {this.updateState} placeholder="Full Name" /> <br />  <br />

        <input type = "text" id='cardBox' value = {this.props.card}
        onChange = {this.updateState} placeholder="Card Number"/>  <br />  <br />
        </Col>

        <Col>
        <input type = "text" id='expBox' value = {this.props.exp}
        onChange = {this.updateState} placeholder="Expiration" />

        <input type = "text" id='cvcBox' value = {this.props.cvc}
        onChange = {this.updateState} placeholder="CVC" /> <br />  <br />
        </Col>
        <input type="submit" id='payButton' value="Pay" />
        </Row></Grid>
        </form>

     </div>
        );
    }
}

export default PaymentForm;

