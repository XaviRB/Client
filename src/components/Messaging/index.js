import React from "react";
import { withFirebase } from '../Firebase';
import NavBarMainPage from "../NavBarMainPage";
import SideBar from "../SideBar";
import ChatWindow from "./Chat.js";
import { useDispatch, useSelector } from 'react-redux';

const pageName = "Messaging page";
const helpContent =
  "Here you can chat with your mentors or mentees. Click on their names on the left bar to open the chat. Or use bottons at the top to go somewhere else.";

const Welcome = () => {
  return (
    <div
      class="container"
      style={{
        paddingTop: "50px",
      }}
    >
      <h2 class="text-center">Hello! This is a messaging page.</h2>
      <br />
      <h2 class="text-center">
        Choose who you want to message on the sidebar to the left
      </h2>
      <br />
      <h2 class="text-center">
        OR find someone to talk to by clicking on the Match button above.
      </h2>
    </div>
  );
};

const Messaging = (props) => {
  let urlParams = new URLSearchParams(window.location.search);

    
  return (
    <div>
      <NavBarMainPage pageName={pageName} helpContent={helpContent} />
      <div style={{ display: "flex" }}>
        <SideBar></SideBar>

        {/* This is ugly, but it renders the chat window when the name parameter is in the URL */}
        {urlParams.has("name") ? (
          <ChatWindow name={urlParams.get("name")} id={urlParams.get("id")} />
        ) : (
          <Welcome />
        )}
      </div>
    </div>
  );

}

export default (withFirebase)(Messaging);
