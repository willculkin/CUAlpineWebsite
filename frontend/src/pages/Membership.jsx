import React, { Component } from "react";
import List from "./MembershipComponents/List";
import { some, isEmpty } from "lodash";

class Membership extends Component {
  constructor(props) {
    super(props);
    this.state = { msg: {} };
  }
  componentDidMount() {
    this.getdata();
  }
  getdata() {
    var name = localStorage.getItem("user")
    fetch("http://localhost:8080/GetUser", {
      method:"POST",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(name)
    })
      .then((res) => {
        return res.json();
      })
      .then((msg) => {
        console.log(msg);
        this.setState({ msg: msg });
      });
  }
  render() {
    if (isEmpty(this.state.msg)) {
      return <div>Empty</div>;
    } else {
    return (<div>
              <div>{this.state.msg.Email}</div>
              <div>{this.state.msg.FirstName}</div>
              <div>{this.state.msg.LastName}</div>
            </div>); //<List data={this.state.msg} />;
    }
    //<div>{this.state.msg}</div>;
  }
}

export default Membership;
