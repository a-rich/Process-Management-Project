import React, { Component } from 'react';
import CardSection from '../components/CardSection';
import {injectStripe} from 'react-stripe-elements';
import {Grid, Row, Col} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import { connect as reduxConnect } from 'react-redux';
//import PaymentRequestForm from '../components/PaymentRequestForm';
// import ReactScriptLoaderMixin from 'react-script-loader'

const mapStateToProps = () => ({
  
})

const mapDispatchToProps = dispatch => {
  return {
    
  }
}

class PaymentForm extends Component {
    constructor(props) {
    super(props);
        this.state = {
            name: 'Name',
            card: 'Card Number',
            exp: 'Expiration',
            cvc: 'CVC',
            price: null
        }
        this.updateState = this.updateState.bind(this);
      };
      updateState(e) {
          this.setState({name: e.target.value});
      }

      onClick = (e) => {
          this.props.history.push('/Account');
      }

      componentWillMount() {
          this.setState({price: window.store.getState().selectedHotel.h.price})
      }
    
    render() {
        return (
            <Grid>
                <div id="paymentForm">
                    <h3 class="header">Pay Now</h3>
                    <form>
                        <Row>
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
                            <input type="submit" id='payButton' value="Pay" onClick={this.onClick} />
                        </Row>
                    </form>
                </div>
            </Grid>
        );
    }
}

// export default PaymentForm;

export default withRouter(reduxConnect(mapStateToProps, mapDispatchToProps)(PaymentForm));