import React, { Component } from "react";
import { connect as ReduxConnect } from 'react-redux'
import { compose } from "recompose";
// import { withAuthorization } from "../Session";
import { withFirebase } from "../Firebase"
import Contact from './Contact'
import "./style.css"

class Welcome extends Component {
  render() {
    return (
      <div
        className="main-box"
      >
        <h2 className="text-center">
          Welcome {this.props.authUser ? this.props.authUser.username : ""} to ASD - Advice, Support, Development Website
        </h2>
        {/* Make sure that the authUser username is valid or else display nothing */}
        <div className="mission-state">
          <h4 className="">Our Mission: </h4>
          <p>Through ASD, we hope to provide a friendly inviting platform with the purpose of linking people with Autism through a mentor to mentee relationship to promote some of the strengths of Autism. Our website is based off previous studies and research papers, as we want you to know this website is a research project with real-life impacts we hope to create. Feel free to contact us via: fakeEmail@gmail.com to give us your comments/suggestions on improvements we can make. </p>
          <br />
          <h4>Website Functionality: </h4>
          <p>To use this website for it's intended purpose, we need you to first create a simple account consisting of some basic information such as name, email, hobbies/interests, and if you would like to be a mentor or mentee. After setting up an account, you are allowed to connect with other users of the website and communicate with them through our chatting mechanism. We ask you to keep conversations civil when communicating with other users.</p> 
          <br /> 

          <p>- Research team at Western Washington University</p>
        </div>
        <Contact />
      </div>
    );
  }
}
// Get authUser information from the Redux store 

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser,
});


export default compose(withFirebase, ReduxConnect(mapStateToProps))(Welcome);
