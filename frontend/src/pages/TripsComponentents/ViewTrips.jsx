import React, { Component } from "react";
import SportForm from "./SportForm";
//import Disscusion from "./Disscusion";
import trips from "./trips.js";
import { Redirect } from "react-router-dom";
class ViewTrips extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trips: trips,
      clickedTrip: false,
      curTrip: null,
      tripType: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(item) {
    var form = "/" + item.formType + "Form";
    console.log(form);
    this.setState({ curTrip: item, clickedTrip: true, tripType: form });
  }
  render() {
    if (this.state.clickedTrip) {
      const path = this.state.tripType;
      return (
        <Redirect
          to={{
            pathname: path,
            state: { tripInfo: this.state.curTrip },
          }}
        />
      );
    }
    const list = Array.from(this.state.trips)
      .slice(0)
      .reverse()
      .map((item) => (
        <form key={item.id}>
          <button onClick={() => this.handleClick(item)}>{item.text}</button>
          {item.date}
          <br />
          <img
            src={item.coverPhoto}
            style={{ maxWidth: "500px", maxHeight: "500px" }}
          />
        </form>
      ));
    return (
      <div>
        These are upcoming trips!
        <br />
        Click the button or location/name of area to sign up
        {list}
      </div>
    );
  }
}

export default ViewTrips;
