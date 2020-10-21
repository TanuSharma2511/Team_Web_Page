import React, { Component } from 'react';
import "../App.css";
import image from "../images/u_logo.svg";

//////////////////////  NAVBAR COMPONENT  ////////////////////////////////
export default class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <>
            <div className="wrapper1">
            <div className="navbar">

                {/* LOGO SECTION */}
                <div className="logo_section">
                   <img src={image} alt="logo" />
                </div>

                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fa fa-times' : 'fa fa-bars'}></i>
                </div>

                {/* NAV MENU ITEMS */}
              <div className="menu">
              <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                  <li className="nav-links-mobile">Home</li>
                  <li className="nav-links-mobile">Sessions</li>
                  <li className="nav-links-mobile active">Speakers</li>
                  <li className="nav-links-mobile">Carrier Info</li>
                  <li className="nav-links-mobile">Contact Us</li>
                </ul>
              </div>

               {/* SOCIAL MEDIA ICONS */}
              <div className="social_media">
                <ul>
                    <li className="first"><i class="fa fa-facebook" aria-hidden="true"></i></li>
                    <li><i className="fa fa-twitter" aria-hidden="true"></i></li>
                    <li><i className="fa fa-instagram" aria-hidden="true"></i></li>
                </ul>
            </div>
            </div>
          </div>
            </>
        )
    }
}
