import React from "react";
import { Link, Redirect } from "react-router-dom";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: null, isLoggedIn: true };
    this.getCurrentUser = this.getCurrentUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async getCurrentUser() {}

  componentDidMount() {
    this.getCurrentUser();
    this.setState({ isLoggedIn: localStorage.getItem("authticated") });
  }

  handleSubmit(e) {
    localStorage.setItem("authenticated", false);
    this.setState({ isLoggedIn: false });
  }
  render() {
    if (!this.state.isLoggedIn) {
      return (
        <Link to={"./login"} style={{ color: "balck" }}>
          You don't seem to be logged in please click here to login
        </Link>
      );
    }
    return (
      <section className="user-profile">
        <h1>User Profile</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input id="submit" type="submit" value="Logout" />
          </form>
        </div>
      </section>
    );
  }
}
export default ProfilePage;
