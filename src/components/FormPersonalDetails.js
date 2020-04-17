import React, { Component } from 'react';
import Left from "./Left";

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
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
    const { values, handleChange } = this.props;
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
          
          <div className="register">
            <form>
            <div className="input_field">
              <input type="text" placeholder="Enter Your Occupation" className="input" onChange={handleChange('occupation')}  defaultValue={values.occupation} required/>
            </div>
            <div className="input_field">
              <input type="text" placeholder="Enter Your City" className="input" onChange={handleChange('city')}  defaultValue={values.city} required/>
            </div>
            <div className="input_field">
              <input type="text" placeholder="Enter Your Bio" className="input" onChange={handleChange('bio')}  defaultValue={values.bio} required/>
            </div>
            <div className="flex">
        
          <button className="btn" onClick={this.back}>Back</button>
          <button className="btn" onClick={this.continue}>Continue</button>
          
          </div>
          </form>
          </div>
          </div>
      </div>
     </React.Fragment>
    );
  }
}

export default FormPersonalDetails;
