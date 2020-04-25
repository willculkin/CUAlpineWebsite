import React from "react";
import { Link } from "react-router-dom";

class RegistrationForm extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      reEnterPassword: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlereEnterPasswordChange = this.handlereEnterPasswordChange.bind(
      this
    );
  }

  putdata(data) {
    fetch("http://localhost:8080/CreateUser", {
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
      .then((res) => {
        return res.json();
      })
      .then((msg) => {
        return msg;
      });
  }

  handleFirstNameChange(e) {
    this.setState({ firstName: e.target.value });
  }
  handleLastNameChange(e) {
    this.setState({ lastName: e.target.value });
  }
  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }
  handlereEnterPasswordChange(e) {
    this.setState({ reEnterPassword: e.target.value });
  }

  arePasswordsTheSame() {
    if (
      this.state.password === this.state.reEnterPassword &&
      this.state.password.length > 5
    ) {
      return true;
    }
    return false;
  }

  //need to get a returned user to add to local state
  //also check to make sure that the account doesn't already exist
  handleSubmit(e) {
    if (!this.arePasswordsTheSame()) {
      return <h1>Passwords are different or not long enough try again</h1>;
    }
    this.putdata(this.state);
    localStorage.setItem("authticated", true);
  }

  render() {
    console.log(this.state);

    if (JSON.parse(localStorage.getItem("authticated"))) {
      return (
        <Link to={"./profile"} style={{ color: "balck" }}>
          Your already logged in please click here to go to your profile
        </Link>
      );
    }
    const submit = !this.arePasswordsTheSame() ? (
      <h3>
        Please make sure the passwords are the same and at least 6 characters
      </h3>
    ) : (
      ""
    );
    return (
      <div>
        <h1>Please sign up for an accout here</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-element">
            <label>Email:</label>
            <input
              type="email"
              id="email"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </div>
          <div className="form-element">
            <label>First Name:</label>
            <input
              type="text"
              id="firstName"
              value={this.state.firstName}
              onChange={this.handleFirstNameChange}
            />
          </div>
          <div className="form-element">
            <label>Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={this.state.lastName}
              onChange={this.handleLastNameChange}
            />
          </div>
          <div className="form-element">
            <label>Password:</label>
            <input
              type="password"
              id="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </div>
          <div className="form-element">
            <label>Re-Enter Password:</label>
            <input
              type="password"
              id="reEnterPassword"
              value={this.state.reEnterPassword}
              onChange={this.handlereEnterPasswordChange}
            />
          </div>
          {submit}
          <input type="submit" id="submit" value="Register" />
        </form>
      </div>
    );
  }
}
export default RegistrationForm;
