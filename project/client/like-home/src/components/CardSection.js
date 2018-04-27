import React, { Component } from 'react';
import {CardElement} from 'react-stripe-elements';
// import ReactScriptLoaderMixin from 'react-script-loader'

// var ReactScriptLoaderMixin = require('react-script-loader').ReactScriptLoaderMixin;


class CardSection extends Component {
    constructor(props) {
		super(props);
      }

    render() {
        return (
			<div id="CardSection">
				<label>
          Card Details
          <CardElement style="{{base: {fontSize: '18px'}}}" />
          </label>
			</div>
        );
    }
}

export default CardSection;
