import React, { Component } from "react";

class Membership extends Component {
  constructor(props) {
    super(props);
    this.state = {msg: ""};  
  }
  componentDidMount(){
    this.getdata();
  }
  getdata(){
    fetch('http://localhost:8080/Read',{
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin':"*"
      }
    })
    .then((res)=>{
      return res.text();
    }).then((msg)=>{
      console.log(msg);
      this.setState({msg:msg});
    })
  }
  render() {
  return <div>{this.state.msg}</div>;
  }
}

export default Membership;
