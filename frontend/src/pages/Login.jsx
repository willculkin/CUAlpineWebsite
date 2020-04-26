import React from "react";

import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      error: null,
      username: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }
  getData(data) {
    fetch("http://localhost:8080/CheckUser", {
      method: "POST",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((msg) => {
        if (msg) {
          localStorage.setItem("authenticated", true);
          this.setState({ isLoggedIn: true });
          return;
        } else {
          localStorage.setItem("authenticated", false);
          this.setState({ isLoggedIn: false });
        }
      });
  }

  handleSubmit(data) {
    const isLoggedIn = true;
    const loginInfo = [this.state.username, this.state.password]
    this.getData(loginInfo);
    this.setState({ isLoggedIn: isLoggedIn });
    if (isLoggedIn) {
      localStorage.setItem("user", this.state.username);
    }
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    if (this.state.isLoggedIn) {
      return (
        <Link to={"./profile"} style={{ color: "balck" }}>
          Click Here To Go To Profile
        </Link>
    );
    }

    return (
      <div>
        <h1>Welcome to the login page</h1>
        <h3>To get a membership or view your profile please login</h3>

        <form onSubmit={this.handleSubmit}>
          <div className="form-element">
            <label>Username:</label>
            <input
              id="username"
              type="text"
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
          </div>

          <div className="form-element">
            <label>Password:</label>
            <input
              id="password"
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </div>
          <input id="submit" type="submit" value="Submit" />
        </form>
        <br />
        <br />

        <Link to={"./register"} style={{ color: "black" }}>
          {" "}
          {"If you don't have a profile click here to create one!"}
        </Link>
      </div>
    );
  }
}

export default Login;
