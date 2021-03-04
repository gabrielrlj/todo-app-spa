import React, { Component } from 'react';
import './Counter.css';
import CounterButton from './CounterButton';

class Counter extends Component {

    //Define initial state in a constructor
    //state = counter = 0
    constructor() {
      super(); // Big error, you gotta use super
      this.state = {
        counter: 0
      }
      this.increment = this.increment.bind(this)
      this.decrement = this.decrement.bind(this)
      this.reset = this.reset.bind(this)
    }

  render(){
    return (
      <div className="Counter">
        <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
        <CounterButton by={2} incrementMethod={this.increment} decrementMethod={this.decrement}/>
        <CounterButton by={3} incrementMethod={this.increment} decrementMethod={this.decrement}/>
        <span className="count">{this.state.counter}</span>
       <div> <button className="reset" onClick={this.reset}>Reset</button> </div>
      </div>
    );
  }

  reset(){
    this.setState(
      () => {
       return {counter: 0}
      }
    );
  }

  increment(by){
    //console.log(`increment from parent - ${by}`)
    //you must pass objects to setState method
    //this.state.counter++;
    //only the values of the things you pass will change the state
    this.setState(
      //instead of using this.state.counter, prevState takes the state before change
      (prevState) => {
       return {counter: prevState.counter + by}
      }
    );
  }

  decrement(by){
    this.setState(
      (prevState) => {
       return {counter: prevState.counter - by}
      }
    );
  }
}




export default Counter;