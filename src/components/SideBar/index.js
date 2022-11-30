import React, { useEffect, useState } from "react";
import { withFirebase } from '../Firebase';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/actions/asyncActions.js';
import Match from './Match.js'

import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { compose } from 'recompose';
import { connect as ReduxConnect } from 'react-redux'




const SideBar = (props) => {
  const [relations, setRelations] = useState([]);

  const contactState = useSelector(state => state.contactState);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchContacts(props.firebase))
  }, []);

  useEffect(() => {
    setRelations(contactState != null && contactState.contacts ? contactState.contacts : []);  
  }, [contactState]);

  // Remove some contact from Firebase Firestore
  function removeMatch(contactId) {
    const snapshot = props.firebase.user(props.authUser.uid)

    // Remove first from auth user the user they connected to
    snapshot.then((snapshot) => {
      snapshot.forEach((doc) => {
        const otherSnap = doc.ref.collection("contacts").where("contactUserId", "==", contactId).get()
        otherSnap.then((otherSnap) => {
          otherSnap.forEach(result => result.ref.delete())
        })
      })
    })

    const newSnapshot = props.firebase.user(contactId)

    // Remove then the user the authorized user clicked on 
    newSnapshot.then((newSnapshot) => {
      newSnapshot.forEach((doc) => {
        const otherSnap = doc.ref.collection("contacts").where("contactUserId", "==", props.authUser.uid).get()
        otherSnap.then((otherSnap) => {
          otherSnap.forEach(result => result.ref.delete())
        })
      })
    })
    dispatch(fetchContacts(props.firebase))
  }

  return (
    <ProSidebar breakPoint="lg" style={{ display: "flex", position: "fixed" }}>
      <Menu iconShape="square" style={{ height: "calc(100vh - 69.5px)" }}>
        <SidebarHeader style={{ marginBottom: "20px" }}>
          &thinsp;
          <FontAwesomeIcon icon="address-book" />
          &thinsp;
          <span>Mentors</span>
        </SidebarHeader>

        {relations != null? relations.map((contact) => {
          return (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <MenuItem
                style={{
                  fontSize: "20px",
                  marginBottom: "auto",
                }}
              >
                <Link
                  to={
                    (window.location.href.indexOf("messages") > -1
                      ? "../messages?name="
                      : "./messages?name=") + contact.name + "&id=" + contact.contactUserId
                  }
                >
                  {contact.name}
                </Link>
              </MenuItem>
              <button
                style={{ fontSize: "10px", margin: "10px" }}
                onClick={() => {
                  removeMatch(contact.contactUserId);
                }}
              >
                Unmatch
              </button>
            </div>
          );
        }) : ''}
        <SidebarFooter style={{ marginTop: "auto" }}>
          <div
            class="d-flex"
            style={{
              justifyContent: "center",
              position: "absolute",
              left: "0",
              right: "0",
              bottom: "20px",
            }}
          >
            <Match dispatch={dispatch}/>
          </div>
        </SidebarFooter>
      </Menu>
    </ProSidebar>
  );
}
const mapStateToProps = state => ({
  authUser: state.sessionState.authUser,
});

export default compose(ReduxConnect(mapStateToProps), withFirebase)(SideBar);
