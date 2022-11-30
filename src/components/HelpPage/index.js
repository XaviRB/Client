import React from "react";
import NavBarMainPage from "../NavBarMainPage";
import Help from "./Help";

const pageName = "Home page";
const helpContent =
  "This is a home page. You can either log in or register here.";

class HelpPage extends React.Component {
  render() {
    return (
      <div>
        <NavBarMainPage pageName={pageName} helpContent={helpContent} />
        <div style={{ display: "flex" }}>
          <Help></Help>
        </div>
      </div>
    );
  }
}

export default HelpPage;
