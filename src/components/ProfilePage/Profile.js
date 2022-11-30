import React, { Component } from "react";
import profilepic from "../../profilepic.png";
import { withRouter } from "react-router-dom";
import { compose } from 'recompose';
import * as ROUTES from '../../constants/routes'
// import { withAuthorization } from "../Session";
import { connect as ReduxConnect } from 'react-redux'
import "./style.css"

class Profile extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className="container"
        style={{
          margin: "auto",
          width: "50%",
        }}
      >
        <h1>My Account</h1>
        <div className="container account_box">
          <img
            src={profilepic}
            className="rounded mx-auto d-block"
            alt="aligment"
            height="160"
            width="200"
            style={{ paddingBottom: "50px", paddingTop: "10px" }}
          ></img>
          <h3 class="text-center">Name: {this.props.authUser != null ? this.props.authUser.username : ""}</h3>
          <h3 className="text-center">Email: {this.props.authUser != null ? this.props.authUser.emails : "error"}</h3> 
          <div class="form-group">
            <label for="interest">Interests:</label>
            {this.props.parentState.interests.map((interest) => {
              return (
                <span class="badge badge-pill badge-info m-2">
                  {interest.displayVal}
                </span>
              );
            })}
          </div>
          <div class="form-group">
            <label for="nameTwo">I want to:</label>
            {this.props.parentState.goals.map((goal) => {
              return (
                <span class="badge badge-pill badge-info m-2">
                  {goal.displayVal}
                </span>
              );
            })}
          </div>
          <div class="d-flex justify-content-center">
          <button
            type="edit"
            class="btn btn-secondary m-1"
            onClick={(e) => {
              history.push({
                pathname: ROUTES.PROFILEPAGE,
                search: "?mode=edit",
              });
            }}
          >
            Edit Profile
          </button>
        </div>
        </div>
        
        {/* <MultiSelection></MultiSelection> */}
        
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser,
});

export default compose(ReduxConnect(mapStateToProps), withRouter)(Profile);
