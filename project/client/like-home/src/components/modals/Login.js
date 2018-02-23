import React, { Component } from 'react';
import Modal from 'react-modal';
import '../../stylesheets/SignUp.scss'
import {Row, Col, Grid} from 'react-bootstrap';

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

class Login extends Component {
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

            <a onClick={this.openModal}>Login</a>
           
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
                  <h2 className="text-center" ref={subtitle => this.subtitle = subtitle}>Sign In</h2>
                  <hr/>
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
                  <p><a href="#" >Forgot your password?</a></p>
                  <button type="submit" class="button2">Login</button>
                  <p>Don't have an account? <a href="#" >Sign Up</a>.</p>
                </div>
              </div> 
           </Modal>
         </form>  


          </div>
        );    }
}

export default Login;