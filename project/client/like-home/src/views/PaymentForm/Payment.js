import React, { Component } from 'react';
import './Payment.scss';
import {ListGroup, ListGroupItem, Grid, Row, Col, Button, buttonStyle, Checkbox , Glyphicon, Carousel} from 'react-bootstrap';
import PaymentForm from '../../components/PaymentForm';
import {Elements} from 'react-stripe-elements';

class Payment extends Component {
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
            <div class="paymentForm">
            <Elements>
            <PaymentForm />
            </Elements>
          </div>

        );
    }
}


export default Payment;
