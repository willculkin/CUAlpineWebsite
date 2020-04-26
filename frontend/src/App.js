import React, { Component } from "react";

import Disscusion from "./pages/Disscusion.jsx";
import Photos from "./pages/Photos.jsx";
import Membership from "./pages/Membership.jsx";
import ViewTrips from "./pages/TripsComponentents/ViewTrips.jsx";
import CreateTrips from "./pages/TripsComponentents/CreateTrips.jsx";
import unregisteredTrips from "./pages/TripsComponentents/unregisteredTrips.jsx";

import Home from "./pages/Home.jsx";
import logo from "./logo.svg";
import "./App.css";

import { Route } from "react-router-dom";

import Navigation from "./pages/shared/Navigation";
import RegistrationForm from "./pages/auth/RegistrationForm";
import config from "./app.config";
import ProfilePage from "./pages/auth/ProfilePage";
import SelectedYearPhotos from "./pages/PhotosComponents/SelectedYearPhotos.jsx";
import Login from "./pages/Login";
import TradForm from "./pages/TripsComponentents/TradForm.jsx";
import SportForm from "./pages/TripsComponentents/SportForm.jsx";
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
          <Route path="/login" component={Login} />
          <Route path="/viewtrips" component={ViewTrips} />
          <Route path="/createtrips" component={CreateTrips} />
          <Route path="/viewtripsPleaselogin" component={unregisteredTrips} />
          <Route path="/photos" component={Photos} />
          <Route path="/register" component={RegistrationForm} />
          <Route path="/membership" component={Membership} />
          <Route path="/disscusion" component={Disscusion} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/SportForm" component={SportForm} />
          <Route path="/TradForm" component={TradForm} />
          <Route path="/selectedyearphotos" component={SelectedYearPhotos} />
        </main>
      </div>
    );
  }
}
export default App;
