// this handles the selected years photos
//it is coupled a little to home photos, but really just needs the photos it should display which is reasonable
import React, { Component } from "react";
import { Link } from "react-router-dom";
class SelectedYearPhotos extends Component {
  state = {
    Photos: null,
  };

  componentDidMount() {
    console.log(this.props.location.state);
    const Photos = this.props.location.state.Photos;
    this.setState({ Photos: Photos });
  }

  render() {
    return (
      <div>
        {this.state.Photos !== null ? (
          this.state.Photos.thePhotos.map((photos, index) => (
            <div>
              <img
                src={photos}
                style={{ maxWidth: "500px", maxHeight: "500px" }}
              />
            </div>
          ))
        ) : (
          <Link to={"./photos"} style={{ color: "black" }}>
            {" Unable to load please go back to photos"}
            {"Photos"}
          </Link>
        )}
      </div>
    );
  }
}

export default SelectedYearPhotos;
