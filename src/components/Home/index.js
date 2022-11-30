import React from "react";
import Login from "../Login";
import NavBar from "../NavBar";

const pageName = "Home page";
const helpContent =
  "This is a home page, but you are not logged in. You can either log in or register here.";

class Home extends React.Component {
  render() {
    return (
      <div>
        <NavBar pageName={pageName} helpContent={helpContent}></NavBar>
        <Login></Login>
      </div>
    );
  }
}

export default Home;
