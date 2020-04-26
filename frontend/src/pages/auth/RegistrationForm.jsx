import React, { Component } from "react";
import ActivePost from "../DisscusionComponents/ActivePost";
import ReadOnlyPost from "../DisscusionComponents/ReadOnlyPost";
import TextareaAutosize from "react-autosize-textarea";
import { Link } from "react-router-dom";

class RegistrationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      passBox: "",
      emailBox: "",
      firstNameBox: "",
      lastNameBox: "",
      rePasswordBox: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleFNChange = this.handleFNChange.bind(this);
    this.handleLNChange = this.handleLNChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handlereEnterPasswordChange = this.handlereEnterPasswordChange.bind(
      this
    );
  }

  putdata(email, pass, fN, lN) {
    var data = [email, pass, fN, lN];
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
        console.log(msg);
        return msg;
      });
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
  //this needs to go to a data base and should work
  handleClick(event) {
    event.preventDefault();
    if (!this.arePasswordsTheSame()) {
      return <h1>Passwords are different or not long enough try again</h1>;
    }
    this.putdata(
      this.state.emailBox,
      this.state.passBox,
      this.state.firstNameBox,
      this.state.lastNameBox
    );

    var loginInfo = [this.state.emailBox, this.state.passBox];
    var checkIfLoggedIn = this.getData(loginInfo);
    if (checkIfLoggedIn) {
      localStorage.setItem("user", this.state.emailBox);
      localStorage.setItem("authenticated", true);
    }
    var value = "";
    this.setState({
      passBox: value,
      emailBox: value,
      firstNameBox: value,
      lastNameBox: value,
      rePasswordBox: value,
    });
  }

  handleFNChange(event) {
    var { value } = event.target;
    this.setState({ firstNameBox: value });
  }
  handleLNChange(event) {
    var { value } = event.target;
    this.setState({ lastNameBox: value });
  }
  handleEmailChange(event) {
    var { value } = event.target;
    this.setState({ emailBox: value });
  }
  handlePassChange(event) {
    var { value } = event.target;
    this.setState({ passBox: value });
  }

  handlereEnterPasswordChange(event) {
    var { value } = event.target;
    this.setState({ rePasswordBox: value });
  }

  arePasswordsTheSame() {
    if (
      this.state.passBox === this.state.rePasswordBox &&
      this.state.passBox.length > 5
    ) {
      return true;
    }
    return false;
  }

  render() {
    if (JSON.parse(localStorage.getItem("authenticated"))) {
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
        <h1>
          {this.props.name !== undefined
            ? this.props.name
            : "Member Registration"}
        </h1>
        <form>
          <label>First Name: </label>
          <TextareaAutosize
            value={this.state.firstNameBox}
            onChange={this.handleFNChange}
          />
          <br />
          <label>Last Name: </label>
          <TextareaAutosize
            value={this.state.lastNameBox}
            onChange={this.handleLNChange}
          />
          <br />
          <label>Email: </label>
          <TextareaAutosize
            value={this.state.emailBox}
            onChange={this.handleEmailChange}
          />
          <br />
          <label>Password: </label>
          <TextareaAutosize
            value={this.state.passBox}
            onChange={this.handlePassChange}
          />
          <br />
          <label>Re-Enter Password: </label>
          <TextareaAutosize
            value={this.state.rePasswordBox}
            onChange={this.handlereEnterPasswordChange}
          />
          <br />
          {submit}
          <br />
          <button onClick={this.handleClick}>Submit</button>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
