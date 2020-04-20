import React from "react";
import OktaAuth from "@okta/okta-auth-js";
import { withAuth } from "@okta/okta-react";
import config from "../../app.config";

export default withAuth(
  class RegistrationForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        reEnterPassword: "",
        sessionToken: null,
      };
      this.oktaAuth = new OktaAuth({ url: config.url });
      this.checkAuthentication = this.checkAuthentication.bind(this);
      this.checkAuthentication();

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
      this.handleLastNameChange = this.handleLastNameChange.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handlereEnterPasswordChange = this.handlereEnterPasswordChange.bind(
        this
      );
    }

    async checkAuthentication() {
      const sessionToken = await this.props.auth.getIdToken();
      if (sessionToken) {
        this.setState({ sessionToken });
      }
    }

    componentDidUpdate() {
      this.checkAuthentication();
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

    handleSubmit(e) {
      if (!this.arePasswordsTheSame()) {
        return <h1>Passwords are different or not long enough try again</h1>;
      }
      e.preventDefault();
      fetch("/api/users", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state),
      })
        .then((user) => {
          this.oktaAuth
            .signIn({
              username: this.state.email,
              password: this.state.password,
            })
            .then((res) =>
              this.setState({
                sessionToken: res.sessionToken,
              })
            );
        })
        .catch((err) => console.log);
    }

    render() {
      if (this.state.sessionToken) {
        this.props.auth.redirect({ sessionToken: this.state.sessionToken });
        return null;
      }
      const submit = !this.arePasswordsTheSame() ? (
        <h3>
          Please make sure the passwords are the same and at least 6 characters
        </h3>
      ) : (
        ""
      );
      return (
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
      );
    }
  }
);
