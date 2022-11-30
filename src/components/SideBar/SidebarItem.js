import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
    MenuItem,
  } from "react-pro-sidebar";

class SidebarItem extends Component {
    render () {
        return(
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <MenuItem
                style={{
                    fontSize: "20px",
                    marginBottom: "auto",
                }}
                >
                <Link
                    to={
                    (window.location.href.indexOf("messages") > -1
                        ? "../messages?name="
                        : "./messages?name=") + this.props.contact.name + "&id=" + this.props.contact.contactUserId
                    }
                >
                    {this.props.contact.name}
                </Link>
                </MenuItem>
                <button
                style={{ fontSize: "10px", margin: "10px" }}
                onClick={() => {
                    this.removeMatch(this.props.contact.id);
                }}
                >
                Unmatch
                </button>
            </div>
        )
    }
}

export default SidebarItem