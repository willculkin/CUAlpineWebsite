import React, { Component } from "react";

import Disscusion from "./pages/Disscusion.jsx";
import Photos from "./pages/Photos.jsx";
import Membership from "./pages/Membership.jsx";
import Trips from "./pages/Trips.jsx";
import Home from "./pages/Home.jsx";
import logo from "./logo.svg";
import "./App.css";

import { Route } from "react-router-dom";
import { SecureRoute, ImplicitCallback } from "@okta/okta-react";

import Navigation from "./pages/shared/Navigation";
import RegistrationForm from "./pages/forms/RegistrationForm";
import config from "./app.config";
import LoginPage from "./pages/Login";
import ProfilePage from "./pages/auth/ProfilePage";

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
        <Navigation
          logo={logo}
          background="#fff"
          hoverBackground="#ddd"
          linkColor="#777"
        />
        <main>
          <Route path="/" exact component={Home} />
          <Route
            path="/login"
            render={() => <LoginPage baseUrl={config.url} />}
          />
          <Route path="/implicit/callback" component={ImplicitCallback} />
          <Route path="/trips" component={Trips} />
          <Route path="/photos" component={Photos} />
          <Route path="/register" component={RegistrationForm} />
          <Route path="/membership" component={Membership} />
          <Route path="/disscusion" component={Disscusion} />
          <SecureRoute path="/profile" component={ProfilePage} />
        </main>
      </div>
    );
  }
}
export default App;
