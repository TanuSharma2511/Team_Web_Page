import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CardSetting from "./components/CardSetting";
import Modal from "./components/Modal";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Navbar />
        <Header />
        <CardSetting />
        
        <Footer />
        <Modal />
        </div>
    );
  }
}

export default App;
