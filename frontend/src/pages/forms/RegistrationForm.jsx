import React, { Component } from 'react'


class RegistrationForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          reEnterPassword: ""
        };
  
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handlereEnterPasswordChange = this.handlereEnterPasswordChange.bind(this);
      }
  
    // componentDidUpdate() {
    //     this.checkAuthentication();
    // }
  
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
        fetch("http://localhost:8080/CreateMember", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.state),
        }).then((res)=>{
            return res.text()
        }).then((text)=>{
            console.log(text);
        });
    }
  
    render() {
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

export default RegistrationForm;