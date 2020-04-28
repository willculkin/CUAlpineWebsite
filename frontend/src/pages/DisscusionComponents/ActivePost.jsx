// this doesn't do anything because couldn't really figure out how to handle passing information upstream with
// synthetic events

import React, { Component } from "react";
import TextareaAutosize from "react-autosize-textarea";

function ActivePost(props) {
  return (
    <form>
      <TextareaAutosize
        value={props.info}
        placeholder={"write your post here"}
        onChange={(event) => props.handleChange(event)}
      />

      <button onClick={(event) => props.handleClick()}>Sumbit</button>
    </form>
  );
}

export default ActivePost;
