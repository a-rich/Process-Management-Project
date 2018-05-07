import React, { Component } from 'react';
import CardSection from '../components/CardSection';
import {injectStripe} from 'react-stripe-elements';
import {Grid, Row, Col} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import { connect as reduxConnect } from 'react-redux';
import { addReward, redeemReward, setSelectedHotelClientPrice} from '../actions';
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
          console.log("TESTING")
          window.store.dispatch(addReward(parseInt(window.store.getState().selectedHotel.h.price)))
          this.props.history.push('/Account');
      }

      calculate = (e) => {
        window.store.dispatch(setSelectedHotelClientPrice(window.store.getState().selectedHotel.h.price-window.store.getState().rewards))
        window.store.dispatch(redeemReward(window.store.getState().selectedHotel.h.price))
        window.location.reload(true)
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
                            <label>Total: ${window.store.getState().selectedHotelClientPrice}</label>
                            <br/>
                            <label>Reward Points: {window.store.getState().rewards}</label>
                            <br/>
                            { window.store.getState().rewards > window.store.getState().selectedHotelClientPrice ?  <input type="submit" id='redeemButton' onClick= {this.calculate} value="Pay with Rewards" />  : null }
                            <br/><br/>
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
