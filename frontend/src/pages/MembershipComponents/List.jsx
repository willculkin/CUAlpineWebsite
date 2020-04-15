import React, { Component } from "react";
import ListPart from "./ListPart";

class List extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const data = Array.from(this.props.data);
    const Items = data.map((item) => {
      return <ListPart key={item.id} value={item} />;
    });

    return <ul>{Items}</ul>;
  }
}
export default List;
