import React, { Component } from 'react';
import CardSection from '../components/CardSection';
import {injectStripe} from 'react-stripe-elements'
// import ReactScriptLoaderMixin from 'react-script-loader'

// var ReactScriptLoaderMixin = require('react-script-loader').ReactScriptLoaderMixin;


class PaymentForm extends Component {
    constructor(props) {
    super(props);
      }

    render() {
        return (
      <div>
          {/* <CardSection /> */}
        Forms

			</div>
        );
    }
}

export default injectStripe(PaymentForm);
