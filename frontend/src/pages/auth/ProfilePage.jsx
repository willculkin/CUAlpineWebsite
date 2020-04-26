import React from "react";
import { Link, Redirect } from "react-router-dom";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: "", firstName: "", lastName: "", isLoggedIn: false };
    this.getCurrentUser = this.getCurrentUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async getCurrentUser() {}

  getUserData(data) {
    fetch("http://localhost:8080/GetUser", {
      method: "POST",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((msg) => {
        this.setState({user: msg[0]})
        this.setState({firstName: msg[1]})
        this.setState({lastName: msg[2]})
      });
  }

  componentDidMount() {
    this.getCurrentUser();
    this.setState({ isLoggedIn: localStorage.getItem("authenticated") });
    this.getUserData(localStorage.getItem("user"));
  }

  handleSubmit(e) {
    localStorage.setItem("authenticated", false);
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
        <div>
        {isLoggedIn
        ? (<section className="user-profile">
            <h1>User Profile</h1>
            <h3>Name: {this.state.firstName} {this.state.lastName} </h3>
            <h3>Username / Email: {this.state.user} </h3>
              <div>
                <form onSubmit={this.handleSubmit}>
                  <input id="submit" type="submit" value="Logout" />
                </form>
              </div>
          </section>)
        : (<Link to={"./login"} style={{ color: "balck" }}>
          You don't seem to be logged in please click here to login
          </Link>)
        }
        </div>
    )
  }
}
export default ProfilePage;
