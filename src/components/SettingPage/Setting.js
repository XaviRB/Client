import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import NumericInput from "react-numeric-input";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "temp101",
      email: "temp@temp.com",
      password: "1234",
      phone: "1-800-46-84733",
      name: "john doe",
      birth: "1999",
      isEmptyState: false,
      edit: "edit",
      textSize: 20,
      tempSize: 20,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      textSize: event.target.value,
    });
  }

  handleClick(event) {
    if (this.state.isEmptyState === false) {
      this.setState({ isEmptyState: true });
      this.setState({ edit: "submit" });
    } else {
      this.setState({ isEmptyState: false });
      this.setState({ edit: "edit" });
    }
    event.preventDefault();
  }
  render() {
    return (
      <div
        class="container"
        style={{
          paddingTop: "50px",
        }}
      >
        <h2 class="text-center">Settings</h2>
        {this.state.isEmptyState && (
          <div>
            <div class="form-group">
              <label style={{ fontSize: this.state.textSize }} for="email">
                <FontAwesomeIcon icon="envelope" />
                &thinsp; Email address:
              </label>
              <input
                style={{ fontSize: this.state.textSize }}
                type="text"
                value={this.state.email}
                onChange={(e) => {
                  this.setState({ email: e.target.value });
                }}
              />
            </div>
            <div class="form-group">
              <label style={{ fontSize: this.state.textSize }} for="pwd">
                <FontAwesomeIcon icon="key" />
                &thinsp; password:
              </label>
              <input
                style={{ fontSize: this.state.textSize }}
                type="text"
                value={this.state.password}
                onChange={(e) => {
                  this.setState({ password: e.target.value });
                }}
              />
            </div>
            <div class="form-group">
              <label style={{ fontSize: this.state.textSize }} for="phone">
                <FontAwesomeIcon icon="phone-square" />
                &thinsp; Phone Number:
              </label>
              <input
                style={{ fontSize: this.state.textSize }}
                type="text"
                value={this.state.phone}
                onChange={(e) => {
                  this.setState({ phone: e.target.value });
                }}
              />
            </div>
          </div>
        )}

        {!this.state.isEmptyState && (
          <div>
            <div class="form-group">
              <label style={{ fontSize: this.state.textSize }} for="email">
                <FontAwesomeIcon icon="envelope" />
                &thinsp; Email address:
              </label>
              <text style={{ fontSize: this.state.textSize }}>
                {" "}
                {this.state.email}{" "}
              </text>
            </div>
            <div class="form-group">
              <label style={{ fontSize: this.state.textSize }} for="pwd">
                <FontAwesomeIcon icon="key" />
                &thinsp; password:
              </label>
              <text style={{ fontSize: this.state.textSize }}>
                {" "}
                {this.state.password}{" "}
              </text>
            </div>

            <div class="form-group">
              <label style={{ fontSize: this.state.textSize }} for="phone">
                <FontAwesomeIcon icon="phone-square" />
                &thinsp; Phone Number:
              </label>
              <text style={{ fontSize: this.state.textSize }}>
                {" "}
                {this.state.phone}{" "}
              </text>
            </div>
          </div>
        )}
        <div>
          <button class="btn btn-secondary m-1" onClick={this.handleClick}>
            {this.state.edit}
          </button>
        </div>
        <text style={{ fontSize: this.state.textSize }}>
          {" "}
          Textsize: {this.state.textSize}{" "}
        </text>
        <button
          class="btn btn-secondary m-1"
          onClick={(e) => {
            if (this.state.textSize !== 30) {
              this.setState({ textSize: this.state.textSize + 1 });
            }
          }}
        >
          Increase Font
        </button>
        <button
          class="btn btn-secondary m-1"
          onClick={(e) => {
            if (this.state.textSize !== 15) {
              this.setState({ textSize: this.state.textSize - 1 });
            }
          }}
        >
          Decrease Font
        </button>
        <div class="d-flex justify-content-center">
          <button type="edit" class="btn btn-secondary m-1">
            Edit Notification Settings
          </button>
          <button
            type="save"
            class="btn btn-success m-1"
            onClick={(e) => {
              window.location.href = "../setting";
            }}
          >
            Save
          </button>
        </div>
      </div>
    );
  }
}

export default Settings;
