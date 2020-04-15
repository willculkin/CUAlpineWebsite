import React, { Component } from "react";

import { Router } from "@reach/router";
import Disscusion from "./pages/Disscusion.jsx";
import Photos from "./pages/Photos.jsx";
import Membership from "./pages/Membership.jsx";
import Trips from "./pages/Trips.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import ResponsiveNavigation from "./components/ResponsiveNavigation";
import logo from "./logo.svg";
import "./App.css";

const navLinks = [
  {
    text: "Home",
    path: "/home",
    icon: "ion-ios-home",
  },
  {
    text: "Disscusion",
    path: "/disscusion",
    icon: "ion-ios-business",
  },
  {
    text: "Photos",
    path: "/photos",
    icon: "ion-ios-megaphone",
  },

  {
    text: "Trips",
    path: "/trips",
    icon: "ion-ios-bonfire",
  },
  {
    text: "Membership",
    path: "/membership",
    icon: "ion-ios-briefcase",
  },
  {
    text: "Login",
    path: "/login",
    icon: "ion-ios-briefcase",
  },
];
class App extends Component {
  constructor() {
    super();
    this.state = {
      test: "dsfd",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ currentBox: value });
  }
  render() {
    return (
      <div className="App">
        <ResponsiveNavigation
          navLinks={navLinks}
          logo={logo}
          background="#fff"
          hoverBackground="#ddd"
          linkColor="#777"
        />
        <Router>
          <Photos path="/photos" />
          <Home path="/home" />
          <Membership path="/membership" />
          <Trips path="/trips" />
          <Disscusion path="/disscusion" />
          <Login path="/login" />
        </Router>
        <textarea value={this.state.value} onChange={this.handleChange} />
      </div>
    );
  }
}
export default App;
