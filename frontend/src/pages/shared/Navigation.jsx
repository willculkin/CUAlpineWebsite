import React from "react";
import { Link } from "react-router-dom";
import { withAuth } from "@okta/okta-react";
import NormalUserLinks from "./NavLinks/NormalUserLinks";
import LoggoutOutLinks from "./NavLinks/LoggoutOutLinks";
import BoardMemberLinks from "./NavLinks/BoardMemberLinks";

//import navLinks from "./"
export default withAuth(
  class Navigation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        authenticated: null,
        navOpen: 0,
        hoverIndex: -1,
      };
      this.checkAuthentication = this.checkAuthentication.bind(this);
      this.checkAuthentication();
    }

    async checkAuthentication() {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    }

    componentDidUpdate() {
      this.checkAuthentication();
    }

    render() {
      if (this.state.authenticated === null) return null;
      const navLinks = this.state.authenticated
        ? NormalUserLinks
        : LoggoutOutLinks;
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
);
