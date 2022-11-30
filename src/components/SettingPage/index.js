import React from "react";
import NavBarMainPage from "../NavBarMainPage";
import Setting from "./Setting";

const pageName = "Settings menu";
const helpContent = "Here you can edit your settings.";
class SettingPage extends React.Component {
  render() {
    return (
      <div>
        <NavBarMainPage pageName={pageName} helpContent={helpContent} />
        <Setting></Setting>
      </div>
    );
  }
}

export default SettingPage;
