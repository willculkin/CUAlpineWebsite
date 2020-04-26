import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Sumbitted extends Component {
  state = { loadingErr: false, text: "", date: "," };
  componentDidMount() {
    if (this.props.location.state === undefined) {
      this.setState({ loadingErr: true });
    } else {
      this.setState({
        text: this.props.location.state,
      });
    }
  }

  render() {
    if (this.state.loadingErr === true) {
      return <Redirect to="./home" />;
    }
    return <div>You have submitted an apllication</div>;
  }
}

export default Sumbitted;
