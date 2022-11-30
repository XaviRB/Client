import React, { Component } from "react";
import RegStep1 from "./RegStep1";
import RegStep2 from "./RegStep2";
import RegStep3 from "./RegStep3";
import RegStep4 from "./RegStep4";
import RegStep5 from "./RegStep5";
import RegStepPreview from "./RegStepPreview";
import { withFirebase } from '../Firebase';
import { withRouter } from 'react-router-dom';
import ProgressBar from "./ProgressBar";

import { compose } from 'recompose';

import * as ROUTES from '../../constants/routes';
import * as ERRORS from '../../constants/errors';

const TOTAL_STEPS = 6;

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  dob: '',
  name: '',
  phoneNumber: '',
  isAdmin: false,
  error: null,
  canContinue: true,
  step: 1,
};

class RegMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {...INITIAL_STATE, width: 40} ;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
  }

  handleResize = e => {
    const windowSize = window.innerWidth; 
    const newWidth = (windowSize <= 800 && 70) || (windowSize >= 800 && windowSize <= 1200 && 50) || 40;
    this.setState({width: newWidth});
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }


  // Checking if user can go to the next step
  handleChange(e, newCanContinue) {
    
    if (e) {
      const { name, value } = e.target;
      this.setState({
        [name]: value,
        canContinue: newCanContinue,
      });
    } else {
      this.setState({
        canContinue: newCanContinue,
      });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      email,
      username,
      password,
      phoneNumber,
      name,
      dob,
      intrest,
    } = this.state;

    // Check for admin perms/If mentor/mentee

    // This should be pushing user information to firebase
    this.props.firebase.doCreateUserWithEmailAndPassword(username, email, password)
    .then(() =>  {
      this.setState({...INITIAL_STATE})
      this.props.history.push(ROUTES.MAINPAGE)
    })
    // Otherwise catch it with error
    .catch(error => {
      
      this.setState({error: true});
    });
    event.preventDefault(); 

  };

  _next(e) {
    e.preventDefault();
    let currentStep = this.state.step;
    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 5 ? TOTAL_STEPS : currentStep + 1;
    this.setState({
      step: currentStep,
    });
  }

  _prev(e) {
    e.preventDefault();
    let currentStep = this.state.step;
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      step: currentStep,
    });
  }

  get prevButton() {
    let step = this.state.step;
    if (step !== 1) {
      return (
        <button
          type="back"
          class="btn btn-secondary m-1 btn-block"
          onClick={this._prev}
        >
          Back
        </button>
      );
    } else {
      return (
        <button
          type="back"
          class="btn btn-secondary m-1 btn-block"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "..";
          }}
        >
          Back
        </button>
      );
    }
  }

  get nextButton() {
    let step = this.state.step;
    if (step < TOTAL_STEPS && this.state.canContinue) {
      return (
        <button
          type="continue"
          class="btn btn-success m-1 btn-block"
          onClick={this._next}
        >
          Continue
        </button>
      );
    } else if (this.state.canContinue) {
      return (
        <button
          type="submit"
          class="btn btn-success m-1 btn-block"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      );
    } else {
      return (
        <button type="continue" class="btn btn-success m-1 btn-block" disabled>
          Continue
        </button>
      );
    }
  }

  render() {
    return (
      <div>
        <div>
          <ProgressBar
            value={(100 * this.state.step) / TOTAL_STEPS}
            max="100"
            width="100%"
            style={{ position: "absolute", left: 0, bottom: 0, right: 0 }}
          />
        </div>
        <div class="container">
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            {"Step " + this.state.step + " out of " + TOTAL_STEPS}
          </div>
        </div>
        <form onSubmit={this.handleSubmit} style={{
          width: this.state.width + "%",
          margin: "10px auto",
          padding: "10px",
          border: "1px solid #eee"
        }}>
          <RegStep1
            currentStep={this.state.step}
            handleChange={this.handleChange}
            stepMessage={"Step " + this.state.step + " out of " + TOTAL_STEPS}
            username={this.state.username}
            email={this.state.email}
            password={this.state.password}
            phoneNumber={this.state.phoneNumber}
          ></RegStep1>
          <RegStep2
            currentStep={this.state.step}
            handleChange={this.handleChange}
            stepMessage={"Step " + this.state.step + " out of " + TOTAL_STEPS}
            name={this.state.name}
            dob={this.state.dob}
          ></RegStep2>
          <RegStep3
            currentStep={this.state.step}
            handleChange={this.handleChange}
            stepMessage={"Step " + this.state.step + " out of " + TOTAL_STEPS}
          ></RegStep3>
          <RegStep4
            currentStep={this.state.step}
            handleChange={this.handleChange}
            stepMessage={"Step " + this.state.step + " out of " + TOTAL_STEPS}
          ></RegStep4>
          <RegStep5
            currentStep={this.state.step}
            handleChange={this.handleChange}
            stepMessage={"Step " + this.state.step + " out of " + TOTAL_STEPS}
          ></RegStep5>
          <RegStepPreview
            currentStep={this.state.step}
            username={this.state.username}
            email={this.state.email}
            phone={this.state.phoneNumber}
            dob={this.state.dob}
            name={this.state.name}
            handleChange={this.handleChange}
            stepMessage={"Step " + this.state.step + " out of " + TOTAL_STEPS}
          ></RegStepPreview>
          <div
            class="container d-flex justify-content-center"
            style={{ paddingTop: "15px" }}
          >
            {this.prevButton}
            {this.nextButton}
          </div>
        </form>
      </div>
    );
  }
}

export default compose(withRouter, withFirebase)(RegMenu);
