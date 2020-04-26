import React, { Component } from "react";

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
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentDidMount() {
    this.setState({
      id: 1,
      text: this.props.location.state.tripInfo.text,
      coverPhoto: this.props.location.state.tripInfo.coverPhoto,
      Users: this.props.location.state.tripInfo.Users,
      date: this.props.location.state.tripInfo.date,
    });
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
              checked={this.state.canDrive}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
        </form>
      </div>
    );
  }
}
