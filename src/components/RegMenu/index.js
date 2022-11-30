import React from "react";
import NavBar from "../NavBar";
import RegForm from "./RegForm";

const pageName = "Registration page";
const helpContent =
  "Here, you are making a new account. Answer the questions and use the buttons at the bottom to go between registration steps.";
class RegMenu extends React.Component {
  render() {
    return (
      <div>
        <NavBar pageName={pageName} helpContent={helpContent} />
        <RegForm></RegForm>
      </div>
    );
  }
}

export default RegMenu;
