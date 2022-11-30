import React from "react";
import NavBarMainPage from "../NavBarMainPage";
import SideBar from "../SideBar";
import Welcome from "./Welcome";

const pageName = "Home page";
const helpContent =
  'This is a home page. Your mentors/mentees appear on the left of the page. Click on them to chat or click on "Matching" to find new mentors/mentees.';
class MainPage extends React.Component {

  doRender() {
    console.log("UWU")
    return <SideBar />
  }

  render() {
    return (
      <div>
        <NavBarMainPage pageName={pageName} helpContent={helpContent} />
        <div style={{ display: "flex" }}>
          {this.doRender()}
          <Welcome></Welcome>
        </div>
      </div>
    );
  }
}

export default MainPage;
