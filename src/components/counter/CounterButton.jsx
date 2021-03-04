import React, { Component } from 'react';
import './Counter.css';
import PropTypes from 'prop-types';
import Counter from './Counter';

//Class component
//Use 'this' to refer to things inside the class
class CounterButton extends Component {

    //Define initial state in a constructor
    //state = counter = 0
    constructor() {
      super(); // Big error, you gotta use super
    //   this.state = {
    //     counter: 0
    //   }
    //   //when you use arrow functions you dont need to use bind
    //   this.increment = this.increment.bind(this)
    //   this.decrement = this.decrement.bind(this)
    }
  
    render(){
      //typically you don't use css in js code 
      //const style = {fontSize: "50px", padding: "15px 30px"};
      //if you want to pass a parameter to a method you wanna use an arrow function
      return (
        <div className="counter">
          <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
          <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
        </div>
      );
    }
  
    //update counter = counter++
    //to have access to 'this' inside function, you must bind the method to the class
    // increment(){
    //   //you must pass objects to setState method
    //   //this.state.counter++;
    //   //only the values of the things you pass will change the state
    //   this.setState(
    //     (prevState) =>  {
    //        return {counter: prevState.counter + this.props.by}
    //     }
    //   );
    //   this.props.incrementMethod(this.props.by);
    // }

    // decrement(){
    //     this.setState(
    //       (prevState) =>  {
    //          return {counter: prevState.counter - this.props.by}
    //       }
    //     );
    //     this.props.decrementMethod(this.props.by);
    // }
  
    }
    
    CounterButton.defaultProps = {
      by : 1
    }
    CounterButton.propTypes = {
      by : PropTypes.number
    }

    export default CounterButton;