// displayes the cover photo for each year and provides a link to the whole calendar

import React, { Component } from "react";
import { Link } from "react-router-dom";
import Photos from "./Photos";
class HomePhotos extends Component {
  state = {};
  render() {
    console.log();

    return (
      <div>
        <h1>please select the year you would like to load</h1>
        {Photos.map((years, index) => (
          <div>
            <Link
              to={{
                pathname: "./selectedyearphotos",
                state: {
                  Photos: years,
                },
              }}
              style={{ color: "black" }}
            >
              {" "}
              {years.text}
            </Link>
            <br />
            <img
              src={years.coverPhoto}
              style={{ maxWidth: "500px", maxHeight: "500px" }}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default HomePhotos;
