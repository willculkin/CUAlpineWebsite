import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import LoginForm from "./forms/LoginForm";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }

  render() {
    return <LoginForm baseUrl={this.props.baseUrl} />
  }
}
export default Login;
