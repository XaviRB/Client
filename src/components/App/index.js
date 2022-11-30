import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "../Home";
import RegMenu from "../RegMenu";
import MainPage from "../MainPage";
import { Component } from "react";
import ProfilePage from "../ProfilePage";
import SettingPage from "../SettingPage";
import Messaging from "../Messaging";
import Login from "../Login";
import { withAuthentication } from "../Session";
import HelpPage from "../HelpPage";
import * as ROUTES from '../../constants/routes'

// Importing icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheckSquare,
  faCoffee,
  faEnvelope,
  faKey,
  faRedo,
  faPhoneSquare,
  faUserCircle,
  faCalendarAlt,
  faUsers,
  faSmileBeam,
  faCommentDots,
  faAddressCard,
  faAddressBook,
  faTrashAlt,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";
// import Navigation from "../Navigation";


library.add(
  faCheckSquare,
  faCoffee,
  faAddressCard,
  faEnvelope,
  faKey,
  faRedo,
  faPhoneSquare,
  faUserCircle,
  faCalendarAlt,
  faUsers,
  faSmileBeam,
  faCommentDots,
  faAddressBook,
  faTrashAlt,
  faCircle
);

class App extends Component {
  data = {
    num: 8484,
    str: "well hi",
    extra: 1090909,
  };

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  testingApiComponent() {
    return (
      <Fragment>
        <div>
          <button onClick={this.getCookie}>Get Cookie</button>
        </div>
        <div>
          <button
            onClick={() => {
              this.postCookie(this.data);
            }}
          >
            Put Cookie
          </button>
        </div>
      </Fragment>
    );
  }

  callAPI() {
    fetch("https://asd-strength.herokuapp.com/testAPI")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  getCookie() {
    fetch("https://asd-strength.herokuapp.com/getCookie")
      .then((res) => res.text())
      .then((res) => console.log(JSON.parse(res)));
  }

  postCookie(data) {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    fetch("https://asd-strength.herokuapp.com/putCookie", options)
      .then((res) => {
        res.text();
        console.log(res);
      })
      .then(this.getCookie());
  }

  componentDidMount() {
    // this.callAPI();
  }

  render() {
    const App = () => (
      <div>
        <BrowserRouter>
          <Switch>
            {/* <Navigation /> */}

            {/* Get routing information from routes.js and attach to components */}
            <Route exact path={ROUTES.HOME} component={Home} />
            <Route path={ROUTES.REGMENU} component={RegMenu} />
            <Route path={ROUTES.MAINPAGE} component={MainPage} />
            <Route path={ROUTES.PROFILEPAGE} component={ProfilePage} />
            <Route path={ROUTES.SETTINGPAGE} component={SettingPage} />
            <Route path={ROUTES.HELPPAGE} component={HelpPage} />
            <Route path={ROUTES.MESSAGING}  component={Messaging} />
            <Route path={ROUTES.LOG_IN} component={Login} />
          </Switch>
        </BrowserRouter>
        {/* {this.testingApiComponent()} */}
      </div>
    );

    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <App />
          </Switch>
        </BrowserRouter>
        {/* <NavBar /> */}
      </React.Fragment>
    );
  }
}

export default withAuthentication(App);
