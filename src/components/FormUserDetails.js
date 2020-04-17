import React, { Component } from 'react';
import Left from "./Left";
import "../App.css";

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  login = e => {
    e.preventDefault();
    this.props.loginStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
     <React.Fragment>
       <div className="wrapper">
      
         <Left />
         
        <div className="right">
          <div className="tabs">
            <ul>
              <li className="register_li">Register</li>
              <li className="login_li" onClick={this.login}>login</li>
            </ul>
          </div>
          
          <div className="register">
            <div className="input_field">
              <input type="text" placeholder="Username" className="input" onChange={handleChange('firstName')}  defaultValue={values.firstName}/>
            </div>
            <div className="input_field">
              <input type="text" placeholder="E-mail" className="input" onChange={handleChange('lastName')}  defaultValue={values.lastName}/>
            </div>
            <div className="input_field">
              <input type="password" placeholder="Password" className="input" onChange={handleChange('password')}  defaultValue={values.password}/>
            </div>
          <button className="btn" onClick={this.continue}>Continue</button>
          </div>
          </div>
      </div>
     </React.Fragment>
    );
  }
}

export default FormUserDetails;
