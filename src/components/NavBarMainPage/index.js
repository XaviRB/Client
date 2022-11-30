import React, { Component } from "react";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

import * as ROUTES from '../../constants/routes'
import SignOutButton from "../SignOut";

// TODO: Add firebase, merge into NavBar component and use authorization to choose which nav to display

// This class represents the nav bar that will be presented when the user is signed in

class NavBarMainPage extends Component {
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
          <a className="navbar-brand" href={ROUTES.MAINPAGE}>
            <img
              src={process.env.PUBLIC_URL + "/logo.jpg"}
              alt="Logo"
              height="50"
              width="50"
            />{" "}
            ASD - Advice, Support, Development
          </a>
          <form className="d-flex">
            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input> */}
            {/* <a className="btn btn-outline-light m-1" href="#">
                            <img src= "/eact-app/src/I60Hf.png" alt="logo" width="30" height="24"> </img>
                        </a> */}
            <button
              className="btn btn-outline-light m-1"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = ROUTES.PROFILEPAGE;
              }}
            >
              My Profile
            </button>
            <button
              className="btn btn-outline-light m-1"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = ROUTES.SETTINGPAGE;
              }}
            >
              Settings
            </button>
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={popover}
            >
              <button
                className="btn btn-outline-light m-1"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Help
              </button>
            </OverlayTrigger>
            <SignOutButton />

          </form>
        </div>
      </nav>
    );
  }
}

export default NavBarMainPage;
