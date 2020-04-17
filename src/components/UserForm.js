import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';
import Login from './Login';
import {Link} from "react-router-dom";

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    password: '',
    occupation: '',
    city: '',
    bio: ''
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Go to login step
  loginStep = () => {
    const { step } = this.state;
    this.setState({
      step:5
    });
  };

  //Go to Register step
  registerStep = () => {
    const { step } = this.state;
    this.setState({
      step:1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, password, occupation, city, bio } = this.state;
    const values = { firstName, lastName, password, occupation, city, bio };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            loginStep={this.loginStep}
            registerStep={this.registerStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            loginStep={this.loginStep}
            registerStep={this.registerStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Success 
            loginStep={this.loginStep}
            registerStep={this.registerStep}
        />;
      case 5:
        return <Login  loginStep={this.loginStep}
        handleChange={this.handleChange}
        registerStep={this.registerStep}
        values={values}/>;  
    }
  }
}

export default UserForm;
