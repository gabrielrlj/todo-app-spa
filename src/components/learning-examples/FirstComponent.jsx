import React, { Component } from 'react';


//class component, must extend Component and implement render method
//class components have state feature
//code inside return actually is JSX, no HTML
class FirstComponent extends Component {
    render(){
      return (
        <div className="firstComponent">
          First component
        </div>
      );
    }
  }

export default FirstComponent;


