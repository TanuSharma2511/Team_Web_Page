import React, { Component } from 'react';
import "../App.css";
import logo from "../images/logo.png";

//////////////////////////////  FOOTER COMPONENT /////////////////////////
export default class Footer extends Component {
    render() {
        return (
            <>
             <div class="footer">
                 <div class="left_align">
                    <img src={logo} alt="logo" />
                 </div>
                 <div class="line">|</div>

                 {/* FOOTER MENU ITEMS */}
                 <div class="right_align">
                     <div class="menu">
                   <ul>
                  <li>About us</li>
                  <li>Mission</li>
                  <li>Vision</li>
                  <li>Expert Talk</li>
                  <li>Master Class</li>
                  <li>Recordings</li>
                  <li>Contact Us</li>
                </ul>
                     </div>
                 
                 </div>
       </div>
       <div class="footer2">
           <div class="left_items">
              <p>Copyright 2020.NPOCA All Rights Reserved</p>
           </div>
           <div class="right_items">
               <p>Site Map | Disclaimer | Privacy | Terms & Conditions</p>
           </div>
       </div>
            </>
        )
    }
}

