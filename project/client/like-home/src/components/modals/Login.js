import React, { Component } from 'react'
import Modal from 'react-modal'
import '../../stylesheets/SignUp.scss'
import {Row, Col, Grid} from 'react-bootstrap'
import { login } from '../../actions/Account.js'
import SignUp from './SignUp'

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
            modalIsOpen: false,
            email: '',
            password:'',
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

      handleEmailChange(e) {
        this.setState({email: e.target.value});
      }

      handlePasswordChange(e) {
        this.setState({password: e.target.value});
      }

      closeModal() {
        this.setState({modalIsOpen: false});
      }

      submit(e){
        e.preventDefault()
          console.log("email",this.refs.email.value)
          console.log("password", this.refs.password.value)
          login({"email": this.refs.email.value,
                "password": this.refs.password.value
          })
          this.closeModal();
          window.location.reload(true);
      }

    render() {
      const {email, password} = this.props
               return (
            <div>

            <div className="zoomHover"><a onClick={this.openModal}>Login</a></div>

            <form>
              <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Sign In"

              >
              <div className="closebuttondiv">
                <button type="button" class="closebutton" onClick={this.closeModal}></button>
              </div>
              <div className="row">
                <div className="col-4">
                  <h2 className="text-center" ref={subtitle => this.subtitle = subtitle}>Sign In</h2>
                </div>
                <div className="col-4">
                  <label for="email"><b>Email Address</b></label>
                  <input ref="email" type="word" placeholder="Enter Email" name="email" required onChange={this.handleEmailChange.bind(this)}/>
                </div>
                <div className="col-4">
                  <label for="psw"><b>Password</b></label>
                  <input ref="password" type="password" placeholder="Enter Password" name="psw" required onChange={this.handlePasswordChange.bind(this)}/>
                </div>
                <div className="col-4">
                  <p><a href="#" >Forgot your password?</a></p>
                  <button type="submit" class="button2 zoomHover" onClick={this.submit}>Login</button>
                  <p>Don't have an account?<SignUp /></p>
                </div>
              </div>
           </Modal>
         </form>
          </div>
        );    }
}

export default Login;