import React, { Component }  from 'react'
import {Form, FormControl, FormGroup, Checkbox, Button, ControlLabel, HelpBlock } from 'react-bootstrap'

class ProfileInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "firstName": "James ",
            "lastName": "Bond",
            "address": "1 Washington Sq, San Jose, CA 95192",
            "email": "jamesbond007@gmail.com",
        };
    }

    render() {
        function FieldGroup({ id, label, help, ...props }) {
            return (
              <FormGroup controlId={id}>
                <ControlLabel>{label}</ControlLabel>
                <FormControl {...props} />
                {help && <HelpBlock>{help}</HelpBlock>}
              </FormGroup>
            );
          }
        return (
            <form>
                <FieldGroup
                    id="formControlsText"
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                />
                <FieldGroup
                    id="formControlsText"
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                />
                <FieldGroup
                    id="formControlsText"
                    type="text"
                    name="email"
                    placeholder="Email"
                />
            </form>
        );
    }
}

export default ProfileInfo;