// This is where state is handled
// it works by importing the links that should be available depending on the state
// to make changes to how state is handled within each state you can edit the compenet that gets rendered when the link is clicked
// to add new users or compnents to you can add a new link to the navlinks or add a new navlink that tell the navigation how to handle the
// new state

import React from "react";
import { Link } from "react-router-dom";
import NormalUserLinks from "./NavLinks/NormalUserLinks";
import LoggoutOutLinks from "./NavLinks/LoggoutOutLinks";
import BoardMemberLinks from "./NavLinks/BoardMemberLinks";

//import navLinks from "./"

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: null,
      count: 0,
      navOpen: 0,
      hoverIndex: -1,
    };
    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.setAuthentication = this.setAuthentication.bind(this);
  }

  componentDidMount() {
    var authenticateded = JSON.parse(localStorage.getItem("authenticated"));
    this.setState({ authenticated: authenticateded });
  }

  checkAuthentication() {
    console.log(
      this.state.authenticated,
      localStorage.getItem("authenticated")
    );
    if (
      this.state.authenticated !==
      JSON.parse(localStorage.getItem("authenticated"))
    ) {
      this.setAuthentication();
    }
    return true;
  }
  setAuthentication() {
    this.setState({
      authenticated: JSON.parse(localStorage.getItem("authenticated")),
    });
    this.forceUpdate();
  }
  componentDidUpdate() {
    if (!this.checkAuthentication()) {
      this.setAuthentication();
    }
  }

  render() {
    var navLinks;
    console.log(this.state.authenticated, "inrender");
    if (JSON.parse(this.state.authenticated)) {
      navLinks = NormalUserLinks;
    } else {
      navLinks = LoggoutOutLinks;
    }

    return (
      <nav className="responsive-toolbar">
        <ul
          style={{ background: this.props.background }}
          className={this.state.navOpen ? "active" : ""}
        >
          <figure
            className="image-logo"
            onClick={() => {
              this.setState({ navOpen: !this.state.navOpen });
            }}
          >
            <img
              src={this.props.logo}
              height="40px"
              width="40px"
              alt="toolbar-logo"
            />
          </figure>
          {navLinks.map((link, index) => (
            <li
              key={index}
              onMouseEnter={() => {
                this.setState({ hoverIndex: index });
              }}
              onMouseLeave={() => {
                this.setState({ hoverIndex: -1 });
              }}
              style={{
                background:
                  this.state.hoverIndex === index
                    ? this.props.hoverBackground || "#999"
                    : "",
              }}
            >
              <Link to={link.path} style={{ color: this.props.linkColor }}>
                {" "}
                {link.text}
                <i className={link.icon} />
              </Link>
            </li>
          ))}
          {/* //{authNav} */}
        </ul>
      </nav>
    );
  }
}
export default Navigation;
