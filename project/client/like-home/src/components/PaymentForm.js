import React, { Component } from 'react';
// import ReactScriptLoaderMixin from 'react-script-loader'

// var ReactScriptLoaderMixin = require('react-script-loader').ReactScriptLoaderMixin;


class PaymentForm extends Component {
    constructor(props) {
		super(props);
		this.state = {
            items: [
                {'name':"New York",
                'address': "1234 NYC Ave",
                  'description': "Experience this all-suite boutique hotel and enjoy an exclusive non-gaming, smoke-free stay known for its sustainable environment",
                  'price': "$99",
                'photo': "https://d1ic4altzx8ueg.cloudfront.net/finder-au/wp-uploads/2016/02/LasVegasSign.Shutterstock-250x250.jpg"
                } ]
        };
      }

    render() {
        return (
			<div id="thePaymentForm">
				Form
			</div>
        );
    }
}

export default PaymentForm;
