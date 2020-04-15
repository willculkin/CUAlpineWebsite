import React, { Component } from "react";
import ListPart from "./ListPart";

<<<<<<< HEAD
class List extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const data = Array.from(this.props.data);
    const Items = data.map((item) => {
      return <ListPart key={item.id} value={item} />;
    });
=======
class List extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const data = Array.from(this.props.data);
        const Items = data.map((item)=>{
           return <ListPart key={item.id} value = {item}/>
        });
>>>>>>> eeed7b687576cf1af52aa44fd7c6e7a142e1effd

    return <ul>{Items}</ul>;
  }
}
export default List;
