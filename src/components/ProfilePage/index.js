import React from "react";
import NavBarMainPage from "../NavBarMainPage";
import SideBar from "../SideBar";
import Profile from "./Profile";
import EditProfile from "./EditProfile";

const pageName = "Edit profile";
const helpContent =
  "Here you can look at and change your profile. Click on Edit Profile to change your info. When editing: Click on x to remove interest bubbles. Click on + to add more.";
class ProfilePage extends React.Component {
  state = {
    interests: [{ displayVal: "Video Games" }, { displayVal: "Books" }],
    goals: [{ displayVal: "Get a job" }],
  };

  setStateFromChild(newState) {
    console.log(newState);
    this.setState(newState);
  }

  // Returns the deep copy of the current state
  deepCopyState() {
    return JSON.parse(JSON.stringify(this.state));
  }

  render() {
    let urlParams = new URLSearchParams(window.location.search);

    return (
      <div>
        <NavBarMainPage pageName={pageName} helpContent={helpContent} />
        <div style={{ display: "flex" }}>
          <SideBar></SideBar>
          {urlParams.has("mode") && urlParams.get("mode") === "edit" ? (
            <EditProfile
              parentState={this.state}
              setParentState={this.setStateFromChild.bind(this)}
              oldState={this.deepCopyState()}
            />
          ) : (
            <Profile parentState={this.state} />
          )}
        </div>
      </div>
    );
  }
}

export default ProfilePage;
