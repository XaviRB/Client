import React, { Component } from 'react';
import Select from 'react-select';
import {interestOptions} from "../../constants/item";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import profilepic from '../profilepic.png';
// import MultiSelection from "./MultiSelection";

class MyProfile extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        //interests: "Video Games",
        objective: "get a job",
        isEmptyState: false,
        edit: "edit",
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleChange(evt) {
      evt.preventDefault();
      this.setState({ [evt.target.name]: evt.target.value });
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
          <h2 class="text-center">My Profile</h2>
          <h2 class="text-center">User 1</h2>
          <div class="form-group">
              <label for="interest">Interests:</label>
              <Select
                defaultValue={[interestOptions [2], interestOptions [3]]}
                isMulti
                name="interests"
                options={interestOptions}
                className="basic-multi-select"
                classNamePrefix="select"
              />
          </div>
          {!this.state.isEmptyState && (
          <div>
            <div class="form-group">
                <label for="objective"> &thinsp; I want to:</label>
                <input 
                  type="text" 
                  value={this.state.objective} 
                  onChange={(e) => {
                    this.setState({ email: e.target.value });
                  }}/>
              </div>
          </div>
          )}
          <div class="d-flex justify-content-center">
            <button type="edit" class="btn btn-secondary m-1" onClick={(e) => {
              window.location.href = "../editprofilepage";
            }}>
              Edit Profile
            </button>
          </div>
        </div>
      );
    }
  }
  export default MyProfile;
