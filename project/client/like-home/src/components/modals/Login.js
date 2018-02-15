import React, { Component } from 'react';
import Modal from 'react-modal';
import '../../stylesheets/SignUpForm.scss'

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

class SignIn extends Component {
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
           
     
            <h2 ref={subtitle => this.subtitle = subtitle}>CREATE AN ACCOUNT</h2>

            <p>Please fill in this form to create an account.</p>
            <hr/>
             <label for="email"><b>Email Address</b></label>
            <input type="word" placeholder="Enter Email" name="email" required aria-required="true"/>              
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required/>
                
             <p><a href="#" >Forgot your password?</a></p>
            <button type="submit" class="button2">LogIn</button>
               <p>Don't have an account? <a href="#" >Sign Up</a>.</p>

           </Modal>
         </form>  


          </div>
        );
    }
}

export default SignIn;