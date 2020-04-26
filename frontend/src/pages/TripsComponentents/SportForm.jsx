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
    };
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
  render() {
    console.log(this.state.trip, "dfsg");
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
        <form></form>
      </div>
    );
  }
}
