import React, { Component } from "react";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

import * as ROUTES from '../../constants/routes'

// TODO: Add firebase, merge with NavBarMainPage component and use authorization to choose which nav to display

// This class is the nav bar that is displayed when the user is not signed in

class NavBar extends Component {
  render() {
    let popover = (
      <Popover id="popover-basic">
        <Popover.Title as="h3">{this.props.pageName}</Popover.Title>
        <Popover.Content>{this.props.helpContent}</Popover.Content>
      </Popover>
    );

    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="https://asd-mentoring.netlify.app/">
            <img
              src={process.env.PUBLIC_URL + "/logo.jpg"}
              alt="Logo"
              height="50"
              width="50"
            />{" "}
            AutisticMentoring
          </a>
          <form className="d-flex">
            <button
              className="btn btn-outline-light m-1"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = ROUTES.LOG_IN;
              }}
            >
              Log in
            </button>

            <div
              style={{
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
                color: "white",
              }}
            >
              - or -
            </div>

            <button
              className="btn btn-outline-light m-1"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = ROUTES.REGMENU;
              }}
            >
              Sign up
            </button>
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={popover}
            >
              <button
                className="btn btn-outline-light m-1"
                data-toggle="popover"
                title="Help"
                data-placement="bottom"
                data-content={"hi"}
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Help
              </button>
            </OverlayTrigger>
          </form>
        </div>
      </nav>
    );
  }
}

export default NavBar;
