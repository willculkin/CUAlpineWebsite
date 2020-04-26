import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class SportForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      text: null,
      coverPhoto: null,
      Users: null,
      date: null,
      canDrive: true,
      numberOfPeople: 0,
      foodRestrictions: "",
      topRope: false,
      leadClimb: false,
      loadingErr: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentDidMount() {
    if (this.props.location.state === undefined) {
      this.setState({ loadingErr: true });
    } else {
      this.setState({
        id: this.props.location.state.tripInfo.id,
        text: this.props.location.state.tripInfo.text,
        coverPhoto: this.props.location.state.tripInfo.coverPhoto,
        Users: this.props.location.state.tripInfo.Users,
        date: this.props.location.state.tripInfo.date,
      });
    }
  }

  handleSubmit(data) {
    console.log("test");
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.name === "canDrive" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }
  render() {
    console.log(this.state.trip, "dfsg");
    let canDrive;
    if (this.state.canDrive) {
      canDrive = (
        <label>
          How many people can fit in your car:
          <input
            name="numberOfPeople"
            type="number"
            value={this.state.numberOfPeople}
            onChange={this.handleInputChange}
          />
        </label>
      );
    }
    if (this.state.loadingErr === true) {
      const info = String(this.state.text);
      return (
        <Redirect
          to={{
            pathname: "./sumbitted",
            state: {
              id: info,
            },
          }}
        />
      );
    }
    return (
      <div>
        <h1>
          This a trip sign up form for {this.state.text} on {this.state.date}
          <br />
          <img
            src={this.state.coverPhoto}
            style={{ maxWidth: "500px", maxHeight: "500px" }}
          />
          <br />
          Please Fill everything out
        </h1>
        <form>
          <label>
            Can Drive:
            <input
              name="canDrive"
              type="checkbox"
              checked={this.state.canDrive}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          {canDrive}
          <br />
          <label>
            Food restrictions:
            <input name="foodRestrictions" onChange={this.handleInputChange} />
          </label>
          Check all that apply
          <br />
          <label>
            Comfortable top rope belaying
            <input
              name="topRope"
              type="checkbox"
              checked={this.state.topRope}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Comfortable lead climbing
            <input
              name="leadClimb"
              type="checkbox"
              checked={this.state.leadClimb}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <input id="submit" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
