import React, { Component } from 'react';
import Modal from 'react-modal';
import '../../stylesheets/SignUp.scss'
import {Row, Col, Grid} from 'react-bootstrap';
import "../../actions/Account";

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : '70%',
      bottom                : 'auto%',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'

    }
  };

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false
        };
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
      }

      openModal() {
        this.setState({modalIsOpen: true});
      }

      afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#00f';
      }

      closeModal() {
        this.setState({modalIsOpen: false});
      }

    render() {
        return (
            <div>

            <a onClick={this.openModal}>Sign Up</a>

            <form>
              <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Sign Up"

              >
              <div className="row">
                <div className="col-4">
                  <h2 className="text-center" ref={subtitle => this.subtitle = subtitle}>Create An Account</h2>
                </div>
                <div className="col-4">
                  <label for="Name"><b>Name</b></label>
                  <input class="make-it-slow" type="word" placeholder="Enter Name" name="Name" required/>
                </div>
                <div className="col-4">
                  <label for="email"><b>Email Address</b></label>
                  <input class="make-it-slow" type="word" placeholder="Enter Email" name="email" required/>
                </div>
                <div className="col-4">
                  <label for="psw"><b>Password</b></label>
                  <input class="make-it-slow" type="password" placeholder="Enter Password" name="psw" required/>
                </div>
                <div className="col-4">
                  <label for="psw-repeat"><b>Confirm Password</b></label>
                  <input class="make-it-slow" type="password" placeholder="Confirm Password" name="psw-repeat" required/>
                </div>
                <div className="col-4">
                  <p>By creating an account you agree to our <a href="#" >Terms & Privacy</a>.</p>
                  <button type="submit" class="button2" onClick={this.createUser}>Sign Up</button>
                  <p>Already have an account? <a href="#" >Sign in</a>.</p>
                </div>
              </div>
           </Modal>
         </form>


          </div>
        );
    }
}

export default SignUp;
