import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';

import ForgotPassword from "./ForgotPassword";

import * as ROUTES from '../../constants/routes';


// Login class to log user into their account

// TODO: When firebase gets installed, login/sign up will need to be updated for information to go through firebase


// Initial state when first starting to log in
const INITIAL_STATE = {
  email: '',
  password: '',
  error: false
};

class Login extends Component {

  constructor(props) {
    super(props)

    // Set state to the initial state
    this.state = { ...INITIAL_STATE, width:50}
    this.onSubmit = this.onSubmit.bind(this)
    // this.handleResize = this.handleResize(this)
    this.onChange = this.onChange.bind(this)
  }

  handleResize = e => {
    const windowSize = window.innerWidth; 
    const newWidth = (windowSize <= 800 && 70) || (windowSize >= 800 && windowSize <= 1200 && 50) || 40;
    this.setState({width: newWidth});
    //console.log(this.state.width)
  }

  componentDidMount() {
    document.title = "Mentor Website";
    window.addEventListener("resize", this.handleResize);
  }

  onSubmit(event) {
    const { email, password } = this.state

    // Sign in with firebase 
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      // If data works, reset initial state of email and password and push user to main page
      .then(() =>  {
        this.setState({...INITIAL_STATE})
        this.props.history.push(ROUTES.MAINPAGE)
      })
      // Otherwise catch it with error
      .catch(error => {
        
        this.setState({error: true});
      });
    
  }

  onChange(event) {
    this.setState({[event.target.name]: event.target.value})
    //console.log(event.target.name)
  }
  giveError() {
    if (this.state.error) {
      return (
        <h6 style={{
          color: "red"
        }}>Error signing in, please try again</h6>
      )
    }
    
  }

  render() {
    const{ email, password } = this.state;

    return (
      <div
        class="container"
        style={{
          paddingTop: "50px",
          textAlign: "center",
        }}
      >
        <h2 style={{
          margin: "30px",

        }}>Welcome to the mentor website!</h2>
        <div style={{
          width: this.state.width + "%",
          margin: "auto",
          border: "1px solid #ddd",
          padding: "20px"
        }}>
          <h2 style={{marginBottom: "30px"}}>Please, Sign In</h2>
        
          <form>
            <div class="form-group">
              <input
                name="email"
                class="form-control"
                value={email}
                id="name"
                onChange={this.onChange}
                type="text"
                placeholder="Email Address"
              ></input>
            </div>
            <div class="form-group">
              {/* Password input */}
              <input 
                name="password" 
                class="form-control" 
                value={password}
                id="pwd"
                onChange={this.onChange}
                type="password"
                placeholder="Password"
              ></input>
            </div>

            <div class="checkbox">
              <label>
                {/* Allows the user to be remembered after entering information */}

                <input type="checkbox" style={{textAlign: "right"}} /> Remember me{" "}
              </label>
            </div>


            {/* Takes the user to the main page where they are signed in */}
            <button
              type="login"
              class="btn btn-dark m-1"
              style={{width: "100%"}}
              onClick={(e) => {
                this.onSubmit()
                e.preventDefault();
              }}
            >
              Login
            </button>
            
            {/* Show this error if the login is not correct */}
            <div>
              {this.giveError()}
            </div>

            {/* Allows the user to register an account if they do not have one */}
            <button
              type="register"
              class="btn btn-dark m-1"
              style={{width: "100%"}}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = ROUTES.REGMENU;
              }}
            >
              Register
            </button>

            {/* Class to check if password has been forgotten and redirect if clicked */}
            <ForgotPassword />
          </form>  
        </div>
        
      </div>
    );
  }
}

export default compose(withRouter, withFirebase)(Login)
