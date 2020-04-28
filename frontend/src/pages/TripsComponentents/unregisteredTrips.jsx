// this is the page that gets displayed if the user is not logged in

import React, { Component } from "react";

import trips from "./trips.js";
import { Redirect } from "react-router-dom";
class unregisteredTrips extends Component {
  constructor() {
    super();

    this.state = {
      trips: trips,
    };
  }

  render() {
    const list = Array.from(this.state.trips)
      .slice(0)
      .reverse()
      .map((item) => (
        <div>
          {item.text}
          {item.date}
          <br />
          <img
            src={item.coverPhoto}
            style={{ maxWidth: "500px", maxHeight: "500px" }}
          />
        </div>
      ));
    return (
      <div>
        These are upcoming trips!
        <br />
        Login to sign up!
        {list}
      </div>
    );
  }
}

export default unregisteredTrips;
