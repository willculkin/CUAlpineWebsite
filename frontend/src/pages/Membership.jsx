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
    fetch("http://localhost:8080/Read", {
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
        this.setState({ msg: msg });
      });
  }
  render() {
    if (isEmpty(this.state.msg)) {
      return <div>Empty</div>;
    } else {
      return <List data={this.state.msg} />;
    }
    //<div>{this.state.msg}</div>;
  }
}

export default Membership;
