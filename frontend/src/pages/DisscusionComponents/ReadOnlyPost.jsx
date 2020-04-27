import React, { Component } from "react";

import TextareaAutosize from "react-autosize-textarea";

function ReadOnlyPost(props) {
  return (
  <p>{props.info.user}: {props.info.text} </p>);
}

export default ReadOnlyPost;
