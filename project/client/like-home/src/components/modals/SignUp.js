import React, { Component } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
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
        this.subtitle.style.color = '#f00';
      }
    
      closeModal() {
        this.setState({modalIsOpen: false});
      }

    render() {
        return (
            <div>
            <a onClick={this.openModal}>Sign Up</a>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Sign Up"
            >
    
              <h2 ref={subtitle => this.subtitle = subtitle}>Sign Up</h2>
              <button onClick={this.closeModal}>Close</button>
              <div>I am a modal</div>
              <form>
                <input />
                <button>tab navigation</button>
                <button>stays</button>
                <button>inside</button>
                <button>the modal</button>
              </form>
            </Modal>
          </div>
        );
    }
}

export default SignUp;