import React, { Component } from 'react'

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
        return (
            <div class="MyRewardsContainer">
                <form>
                    First Name: <br></br>
                    <input type="text" name="firstname"></input>
                    <br></br>
                    Last Name: <br></br>
                    <input type="text" name="lastname"></input>
                    <br></br>
                    Email: <br></br>
                    <input type="text" name="lastname"></input>
                </form>
            </div>
        );
    }
}

export default ProfileInfo;