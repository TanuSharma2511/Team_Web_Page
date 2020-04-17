import React, { Component } from 'react';
import "../App.css";

export class Login extends Component {

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
        <div className="left">
            <h3>Rocket Station</h3>   
          <img src="https://i.imgur.com/eN4AKys.png" alt="Rocket_image" />
        </div>
        <div className="right">
          <div className="tabs">
            <ul>
              <li className="register_li" onClick={this.register}>Register</li>
              <li className="login_li" onClick={this.login}>login</li>
            </ul>
          </div>
          
          <div className="register">
            <div className="input_field">
              <input type="text" placeholder="Username" className="input" onChange={handleChange('firstName')}  defaultValue={values.firstName}/>
            </div>
            <div className="input_field">
              <input type="password" placeholder="Password" className="input" onChange={handleChange('password')}  defaultValue={values.password}/>
            </div>
          <button className="btn">Login</button>
          </div>
          </div>
      </div>
     </React.Fragment>
    );
  }
}

export default Login;
