import React, { Component } from "react";
//import Disscusion from "./Disscusion";
import ViewTrips from "./ViewTrips";
const TripTypes = ["sport", "trad"];

class CreateTrips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      text: "",
      coverPhoto: "",
      Users: null,
      date: "",
      formType: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    console.log(event.target);
    const value = target.type === "radio" ? target.value : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(data) {
    console.log("test");
  }

  render() {
    return (
      <div>
        Add a new trip!
        <form>
          <label>
            Name of Trip
            <input name="text" onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Photo Upload
            <input name="coverPhoto" onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            When is this trip happening
            <input name="date" onChange={this.handleInputChange} />
          </label>
          <br />
          What type of trip is it?
          <br />
          {TripTypes.map((trip, i) => (
            <label key={i}>
              {trip}
              <input
                name="formType"
                value={trip}
                checked={this.state.formType === trip}
                onChange={this.handleInputChange}
                type="radio"
              />
            </label>
          ))}
          <br />
          <input id="submit" type="submit" value="Submit" />
        </form>
        <br />
        <br />
        <br />
        <br />
        <ViewTrips />
      </div>
    );
  }
}

export default CreateTrips;
