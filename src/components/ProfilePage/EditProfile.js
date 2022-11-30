import React, { Component } from "react";
// import profilepic from "../profilepic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router-dom";

class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.parentState;
  }

  CreateDeletable(text, fOnClick) {
    return (
      <div class="badge badge-pill badge-primary m-2">
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {text}
          <div>
            <button
              type="button"
              class="close"
              aria-label="Dismiss"
              onClick={fOnClick}
            >
              <span className="fa-layers fa-fw">
                <FontAwesomeIcon
                  icon="circle"
                  style={{
                    fontSize: "17pt",
                    color: "white",
                    verticalAlign: "middle",
                  }}
                />
                <FontAwesomeIcon
                  icon="trash-alt"
                  style={{
                    fontSize: "11pt",
                    color: "black",
                    verticalAlign: "middle",
                  }}
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { history } = this.props;
    // console.log(this.props.oldState);
    return (
      <div
        class="container"
        style={{
          paddingTop: "50px",
        }}
      >
        <h2 class="text-center">My Profile</h2>
        <h2 class="text-center">User 1</h2>
        {/* <img
          src={profilepic}
          className="rounded mx-auto d-block"
          alt="aligment"
          height="160"
          width="200"
          style={{ paddingBottom: "50px", paddingTop: "10px" }}
        ></img> */}
        <div class="form-group">
          <label for="interest">Interests: </label>
          {this.state.interests.map((interest) => {
            return this.CreateDeletable(interest.displayVal, () => {
              let interestArr = this.state.interests;
              for (let i = 0; i < interestArr.length; i++) {
                if (interestArr[i].displayVal === interest.displayVal) {
                  interestArr.splice(i, 1);
                }
              }
              this.setState({ interests: interestArr });
            });
          })}
          <button
            type="button"
            class="badge badge-pill badge-dark m-2"
            onClick={(item) => {
              // this.handleIncrement({ item });
            }}
          >
            <span class="glyphicon glyphicon-plus" aria-hidden="true">
              +
            </span>
          </button>
        </div>
        <div class="form-group">
          <label for="nameTwo">Goals:</label>
          {this.state.goals.map((goal) => {
            return this.CreateDeletable(goal.displayVal, () => {
              let goalArr = this.state.goals;
              for (let i = 0; i < goalArr.length; i++) {
                if (goalArr[i].displayVal === goal.displayVal) {
                  goalArr.splice(i, 1);
                }
              }
              this.setState({ goals: goalArr });
            });
          })}
          <button
            type="button"
            class="badge badge-pill badge-dark m-2"
            onClick={(e) => {}}
          >
            <span class="glyphicon glyphicon-plus" aria-hidden="true">
              +
            </span>
          </button>
        </div>
        <div class="d-flex justify-content-center">
          <button
            type="cancel"
            class="btn btn-secondary m-1"
            onClick={() => {
              console.log(this.props.oldState);
              console.log(this.state);
              this.setState(this.props.oldState);

              console.log(this.props.oldState);
              console.log(this.state);

              history.push({
                // pathname: "/profilepage",
                search: "?mode=view",
              });
            }}
          >
            Cancel
          </button>
          <button
            type="submit"
            class="btn btn-success m-1"
            onClick={() => {
              history.push({
                pathname: "/profilepage",
                search: "?mode=view",
              });
            }}
          >
            Save
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(EditProfile);
