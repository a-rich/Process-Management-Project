import React, { Component } from 'react';
import CardSection from '../components/CardSection';
import {injectStripe} from 'react-stripe-elements';
import {Grid, Row, Col} from 'react-bootstrap';
//import PaymentRequestForm from '../components/PaymentRequestForm';
// import ReactScriptLoaderMixin from 'react-script-loader'



class PaymentForm extends Component {
    constructor(props) {
    super(props);
        this.state = {
            name: 'Name',
            card: 'Card Number',
            exp: 'Expiration',
            cvc: 'CVC'
        }
        this.updateState = this.updateState.bind(this);
      };
      updateState(e) {
          this.setState({name: e.target.value});
      }

    render() {
        return (
      <div id="paymentForm">
        <h3 class="header">Pay Now</h3>
        <form>
        <Grid><Row>
        <Col>

        <input type = 'text' id='nameBox' value = {this.props.name}
            onChange = {this.updateState} placeholder="Full name" /> <br />  <br />

        <input type = "text" id='cardBox' value = {this.props.card}
        onChange = {this.updateState} placeholder="Card number"/>  <br />  <br />
        </Col>

        <Col>
        <input type = "text" id='expBox' value = {this.props.exp}
        onChange = {this.updateState}  placeholder="Expiration" />

        <input type = "text" id='cvcBox' value = {this.props.cvc}
        onChange = {this.updateState}  placeholder="CVC" /> <br />  <br />
        </Col>
        <input type="submit" id='payButton' value="Pay" />
        {/* <PaymentRequestForm /> */}
        </Row></Grid>
        </form>
	</div>
        );
    }
}

// export default PaymentForm;

export default injectStripe(PaymentForm);