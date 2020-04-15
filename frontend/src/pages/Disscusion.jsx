import React, { Component } from "react";
import DisscusionTest from "./DisscusionTest";
import TextBox from "./DisscusionComponents/ActivePost";
import ReadOnlyPost from "./DisscusionComponents/ReadOnlyPost";
import TextareaAutosize from "react-autosize-textarea";

class Disscusion extends Component {
  constructor() {
    super();
    this.state = {
      textBoxs: DisscusionTest,
      currentBox: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getdata()
  }
  getdata(){
    fetch('http://localhost:8080/ReadDiscussion',{
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin':"*"
      }
    })
    .then((res)=>{
      return res.json();
    }).then((msg)=>{
      console.log(msg);
      this.setState({textBoxs:msg});
    })
  }
  putdata(data){
    fetch('http://localhost:8080/CreateDiscussion',{
      method: 'POST',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin':"*",
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    }).then((res)=>{
      return res.json();
    }).then((msg)=>{
      return msg;
    })
  }

  //this needs to go to a data base and should work
  handleClick(event) {
    const textBoxs = this.state.textBoxs;
    const currentBox = "";
    this.putdata(this.state.currentBox);
    textBoxs.push(currentBox);
    this.setState({
      textBoxs: textBoxs,
      currentBox: currentBox,
    });
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ currentBox: value });
  }

  render() {
    //this is a slow/space heavy way to get the posts in the right order
    const list = this.state.textBoxs
      .slice(0)
      .reverse()
      .map((item) => <ReadOnlyPost info={item} />);
    return (
      <div>
        <h1>Discussion Board</h1>
        <form>
          <TextareaAutosize
            value={this.state.currentBox}
            placeholder={"write your post here"}
            onChange={this.handleChange}
          />

          <button onClick={this.handleClick}>Submit</button>
        </form>
        {list}

        <h2>{this.state.currentBox}</h2>
      </div>
    );
  }
}

export default Disscusion;
