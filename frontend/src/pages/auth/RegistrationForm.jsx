import React, { Component } from "react";
import ActivePost from "../DisscusionComponents/ActivePost";
import ReadOnlyPost from "../DisscusionComponents/ReadOnlyPost";
import TextareaAutosize from "react-autosize-textarea";

class Disscusion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      passBox: "",
      emailBox: "",
      firstNameBox: "",
      lastNameBox: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleFNChange = this.handleFNChange.bind(this);
    this.handleLNChange = this.handleLNChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
  }

  componentDidMount() {
    this.getdata();
  }
  getdata() {
    fetch("http://localhost:8080/ReadUser", {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((msg) => {
        console.log(msg);
        this.setState({ textBoxs: msg });
      });
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

  //this needs to go to a data base and should work
  handleClick(event) {
    const passBox = "";
    const emailBox = "";
    const firstNameBox = "";
    const lastNameBox = "";
    this.putdata(this.state.emailBox);
    this.setState({
      passBox: passBox,
      emailBox: emailBox,
      firstNameBox: firstNameBox,
      lastNameBox: lastNameBox,
    });
  }

  handleFNChange(event) {
    const { value } = event.target;
    this.setState({ firstNameBox: value });
  }
  handleLNChange(event) {
    const { value } = event.target;
    this.setState({ lastNameBox: value });
  }
  handleEmailChange(event) {
    const { value } = event.target;
    this.setState({ emailBox: value });
  }
  handlePassChange(event) {
    const { value } = event.target;
    this.setState({ passBox: value });
  }

  render() {

    return (
      <div>
        <h1>
          {this.props.name !== undefined ? this.props.name : "Member Registration"}
        </h1>
        <form>
          <label>First Name: </label>
          <TextareaAutosize
            value={this.state.firstNameBox}
            onChange={this.handleFNChange}
          />
          <br/>
          <label>Last Name: </label>
          <TextareaAutosize
            value={this.state.lastNameBox}
            onChange={this.handleLNChange}
          />
          <br/>
          <label>Email: </label>
          <TextareaAutosize
            value={this.state.emailBox}
            onChange={this.handleEmailChange}
          />
          <br/>
          <label>Password: </label>
          <TextareaAutosize
            value={this.state.passBox}
            onChange={this.handlePassChange}
          />
          <br/>
          <button onClick={this.handleClick}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Disscusion;
