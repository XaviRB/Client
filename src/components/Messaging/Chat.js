import React, { useEffect, useState } from "react";
import { withFirebase } from '../Firebase';
import { useSelector } from 'react-redux';


const ChatWindow = (props) => {
  const [messages, setMessages] = useState([]);


  const contacts = useSelector(state => state.contactState).contacts;
  

  useEffect(() => {
    console.log("updating")
    if (contacts != null && contacts.length > 0){
      console.log("contacts not null and greater than 0")
      // Find this contact in the contact list
      const temp = contacts.find(contact => {
        return contact.contactUserId === props.id 
      })
      // if the contact exists and has messages, set the messages
      if (temp != null && temp.messages.length > 0){
        console.log("setting messages")
        setMessages(temp.messages);
      }
    }
  });
  


  const handleMessageSend = (msg, recipient) => {
    if (msg.length > 0) {
      let newMessages = messages;
      newMessages.push({
        from: "You",
        to: props.name,
        message: msg,
        timestamp: Date.now(),
        weAreSender: true
      });
      setMessages(newMessages);     
      
      props.firebase.doAddMessage("", props.id, true, msg);
      props.firebase.doAddMessage(props.id, "", false,  msg);
    }
  }
  
  return(
    <div
      style={{
        maxHeight: "calc(100vh - 279px)",
      }}
    >
      <div style={{ margin: "20px" }}>
        You are chatting to <b>{props.name}</b>.
      </div>
      <div
        style={{
          margin: "20px",
          minHeight: "100%",
          maxHeight: "100%",
          borderStyle: "solid",
          borderWidth: "2px",
          borderColor: "grey",
          overflowY: "auto",
          padding: "10px",
        }}
      >
        {console.log(messages)}{messages.sort((a,b) => a.timestamp - b.timestamp).map((msg) => {
          if (msg.to !== props.name && msg.from !== props.name)
            return null;
          return (
            <div
              // TODO: try to align the messages on the different sides
              style={
                msg.weAreSender
                  ? {
                      position: "relative",
                      left: "0vw",
                    }
                  : {
                      position: "relative",
                      right: "0vw",
                    }
              }
            >
              {msg.weAreSender}
              {(msg.weAreSender ? "You" : props.name) +
                " (" +
                new Date(msg.timestamp).toLocaleString("en-US") +
                "): "}
              <h5>
                <div
                  class={
                    "badge " +
                    (msg.weAreSender ? " badge-primary" : " badge-secondary")
                  }
                  style={{
                    // float: floatSide,
                    wordWrap: "break-word",
                  }}
                >
                  {msg.message}
                </div>
              </h5>
            </div>
          );
        })}
      </div>
      <div
        class="form-group pull-right"
        style={{
          minWidth: "calc(100vw - 370px)",
          marginLeft: "20px",
          marginRight: "20px",
        }}
      >
        <input
          class="form-control"
          type="text"
          id="MessageInput"
          onKeyPress={(e) => {
            if (e.charCode === 13) {
              let input = document.getElementById("MessageInput");
              let message = input.value;
              input.value = "";
              handleMessageSend(message, props.name);
            }
          }}
        ></input>
        <button
          class="btn btn-primary pull-right"
          onClick={() => {
            let input = document.getElementById("MessageInput");
            let message = input.value;
            input.value = "";
            handleMessageSend(message, props.name);
          }}
          style={{
            // float: "right",
            margin: "5px",
          }}
        >
          Send Message
        </button>
      </div>
    </div>
  );
}
export default (withFirebase)(ChatWindow);
