import React, { Component } from 'react';
import Left from "./Left";

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, password, occupation, city, bio }
    } = this.props;
    return (
     <React.Fragment>
        <div className="wrapper">
       
        <Left />

        <div className="right">
          <div className="tabs">
           <h4>Confirm User Data</h4>
          </div>
     <div className="list">   

    <div className="listItem"><label htmlFor="firstName">UserName : </label><span>{firstName}</span></div>
    <div className="listItem"><label htmlFor="firstName">Email : </label><span>{lastName}</span></div>
    <div className="listItem"><label htmlFor="firstName">Password : </label><span>{password}</span></div>
    <div className="listItem"><label htmlFor="firstName">Occupation : </label><span>{occupation}</span></div>
    <div className="listItem"><label htmlFor="firstName">City : </label><span>{city}</span></div>
    <div className="listItem"><label htmlFor="firstName">Bio : </label><span>{bio}</span></div>
   
    </div> 
        
          <div className="flex">
        
          <button className="btn" onClick={this.back}>Back</button>
          <button className="btn" onClick={this.continue}>Continue</button>
          
          </div>
          </div>
          </div>
     </React.Fragment>
    );
  }
}

export default Confirm;
