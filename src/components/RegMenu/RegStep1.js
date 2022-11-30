import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import ProgressBar from "./ProgressBar";

// Regular expression for validating fields
// const REGEX_USERNAME = /^[A-Za-z0-9]{3,}$/;
// const REGEX_PASSWORD = /^.{6,}$/;
// const REGEX_EMAIL = /^[A-Za-z0-9]+@[A-Za-z]+\.[A-Za-z]+$/;
// const REGEX_PHONE = /^[0-9()-]+$/;

class RegStep1 extends Component {
  constructor(props) {
    super(props);

    this.canContinue.bind(this);

    this.state = {
      username: this.props.username,
      password: this.props.password, //! Need a more secure way to handle passwords later
      password_rpt: "",
      email: this.props.email,
      phoneNumber: this.props.phoneNumber,
    };
  }

  canContinue() {
    // ! Commenting out for the demo, but this check works.
    
    // const { username, password, email, phoneNumber, password_rpt } = this.state;
    // return (
    //   REGEX_USERNAME.test(username) &&
    //   REGEX_PASSWORD.test(password) &&
    //   (REGEX_EMAIL.test(email) || REGEX_PHONE.test(phoneNumber)) &&
    //   password === password_rpt
    // );
    return true;
  }

  render() {
    if (this.props.currentStep !== 1) {
      // Prop: The current step
      return null;
    }

    // this.props.handleChange(null, this.canContinue());

    return (
      <div className="container">
        <div
          class="sign-box container"
        >
          <h2 style={{textAlign: "center"}}>Create an account</h2>
          <div class="form-group">
            <i class="fas fa-address-card"></i>
            <label for="name">
              <FontAwesomeIcon icon="address-card" />
              &thinsp; Username: *
            </label>
            <input
              class="form-control"
              name="username"
              value={this.state.username}
              onChange={(e) => {
                this.setState({ username: e.target.value }, () => {
                  this.props.handleChange(e, this.canContinue());
                });
              }}
              required
            ></input>
          </div>
          <div class="form-group">
            <label for="email">
              <FontAwesomeIcon icon="envelope" />
              &thinsp; Email address: *
            </label>
            <input
              name="email"
              class="form-control"
              id="email"
              value={this.state.email}
              onChange={(e) => {
                this.setState({ email: e.target.value }, () => {
                  this.props.handleChange(e, this.canContinue());
                });
              }}
              required
            ></input>
          </div>
          <div class="form-group">
            <label for="pwd">
              <FontAwesomeIcon icon="key" />
              &thinsp;Password: *
            </label>
            <input
              name="password"
              class="form-control"
              id="pwd"
              type="password"
              value={this.state.password}
              onChange={(e) => {
                this.setState({ password: e.target.value }, () => {
                  this.props.handleChange(e, this.canContinue());
                });
              }}
              required
            ></input>
          </div>
          <div class="form-group">
            <label for="pwd-rpt">
              <FontAwesomeIcon icon="key" />
              &thinsp;Repeat password: *
            </label>
            <input
              required
              name="passwordrpt"
              class="form-control"
              id="pwd"
              type="password"
              value={this.state.password_rpt}
              onChange={(e) => {
                this.setState({ password_rpt: e.target.value }, () => {
                  this.props.handleChange(null, this.canContinue());
                });
              }}
            ></input>
          </div>
          <div class="form-group">
            <label for="phone">
              <FontAwesomeIcon icon="phone-square" />
              &thinsp; Phone Number:
            </label>
            <input
              name="phoneNumber"
              class="form-control"
              id="phone"
              value={this.state.phoneNumber}
              onChange={(e) => {
                this.setState({ phoneNumber: e.target.value }, () => {
                  this.props.handleChange(e, this.canContinue());
                });
              }}
            ></input>
          </div>
        </div>
      </div>
    );
  }
}
export default RegStep1;
