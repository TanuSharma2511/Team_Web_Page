import React, { Component } from 'react';
import Left from "./Left";

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  login = e => {
    e.preventDefault();
    this.props.loginStep();
  };
  register = e => {
    e.preventDefault();
    this.props.registerStep();
  };

  render() {
    return (
     <React.Fragment>
      
       <div className="wrapper">
       
       <Left />

        <div className="right">
          <div className="tabs">
            <ul>
              <li className="register_li" onClick={this.register}>Register</li>
              <li className="login_li" onClick={this.login}>login</li>
            </ul>
          </div>
          <div className="submission">
          <h1>Thank You For Your Submission</h1>
            <p>You will get an email with further instructions</p>
          </div>
          </div>
          </div>

     </React.Fragment>
    );
  }
}

export default Success;
