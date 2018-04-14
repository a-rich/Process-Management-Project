import React, { Component } from 'react';
import Modal from 'react-modal';
import '../../stylesheets/SignUp.scss'
import {Row, Col, Grid} from 'react-bootstrap';
import {createUser} from '../../actions/Account.js';

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
            modalIsOpen: false,
            name: '',
            email: '',
            password:''
        };
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.submit = this.submit.bind(this)
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

      handleEmailChange(e) {
        this.setState({email: e.target.value});
    }
    handlePasswordChange(e) {
        this.setState({password: e.target.value});
    }

    handleNameChange(e){
      this.setState({name: e.target.value});
    }

      submit(e){
        e.preventDefault()
        createUser(
          { "name": this.refs.name.value,
            "email": this.refs.email.value,
            "password": this.refs.password.value
          })
          this.closeModal();
      }

    render() {

      const {name, email, password} = this.props
        return (
            <div>

            <a onClick={this.openModal}>Sign Up</a>

            <form onSubmit={this.submit}>
              <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Sign Up"

              >
              <div className="closebuttondiv">
                <button type="button" class="closebutton" onClick={this.closeModal}></button>
              </div>
              <div className="row">
                <div className="col-4">
                  <h2 className="text-center" ref={subtitle => this.subtitle = subtitle}>Create An Account</h2>
                </div>
                <div className="col-4">
                  <label for="Name"><b>Name</b></label>
                  <input class="make-it-slow" ref="name" type="word" placeholder="Enter Name" name="Name" required  onChange={this.handleNameChange.bind(this)}/>
                </div>
                <div className="col-4">
                  <label for="email"><b>Email Address</b></label>
                  <input class="make-it-slow" ref="email" type="word" placeholder="Enter Email" name="email" required  onChange={this.handleEmailChange.bind(this)}/>
                </div>
                <div className="col-4">
                  <label for="psw"><b>Password</b></label>
                  <input class="make-it-slow" ref="password" type="password" placeholder="Enter Password" name="psw" required  onChange={this.handlePasswordChange.bind(this)}/>
                </div>
                <div className="col-4">
                  <label for="psw-repeat"><b>Confirm Password</b></label>
                  <input class="make-it-slow" type="password" placeholder="Confirm Password" name="psw-repeat" required/>
                </div>
                <div className="col-4">
                  <p>By creating an account you agree to our <a href="#" >Terms & Privacy</a>.</p>
                  <button class="button2"  onClick={this.submit}>Sign Up</button>
                </div>
              </div>
           </Modal>
         </form>


          </div>
        );
    }
}

export default SignUp;
