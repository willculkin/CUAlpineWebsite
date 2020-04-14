//struggled to get the function to work outside of in Disscusion so moved to disscusion

import React, { Component } from "react";
import TextareaAutosize from "react-autosize-textarea";

function TextBox(props) {
  return (
    <form>
      <TextareaAutosize
        value={props.info}
        placeholder={"write your post here"}
        onChange={(event) => props.handleChange(event)}
      />

      <button onClick={() => props.handleClick()}>Sumbit</button>
    </form>
  );
}

export default TextBox;
