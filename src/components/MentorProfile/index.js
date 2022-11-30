import React, { Component } from 'react';
import profilepic from '../profilepic.png';

class MentorProfile extends Component {
    render() { 
        return (  
            <div
            class="container"
            style={{
              paddingTop: "50px",
            }}
          >
            <h2 class="text-center">Mentor 1's Profile</h2>
            <h2 class="text-center">Mentor 1</h2>
            <img src={profilepic} className="rounded mx-auto d-block" alt="aligment" height="160" width="200" style={{paddingBottom: "50px", paddingTop: "10px"}}></img>
            <div class="form-group">
              <label for="interest">Interests:</label>
              <span class="badge badge-pill badge-info m-2">Soccers</span>
              <span class="badge badge-pill badge-info m-2">Video Games</span>
            </div>
            <div class="form-group">
              <label for="nameTwo">I want to:</label>
              <span class="badge badge-pill badge-info m-2">Help someone to get a job</span>
            </div>
          </div>
        );
    }
}
 
export default MentorProfile;