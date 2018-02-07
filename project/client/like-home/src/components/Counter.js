import React, { Component } from 'react';
import '../stylesheets/Counter.scss'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
          counter: 5
        };
      }

      onIncrementClick = () => {
        this.setState(this.increment);
      }

      increment(state) {
        return { ...state, counter: state.counter + 1 };
      }

    render() {
        return (
            <button onClick={this.onIncrementClick}>
                {this.state.counter}
            </button>
        );
    }
}

export default Counter;