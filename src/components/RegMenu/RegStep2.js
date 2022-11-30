import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from "react-select";

const options = [
  { label: "Mentor", value: "mentor" },
  { label: "Mentee", value: "mentee" },
];

class RegStep2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dob: this.props.dob,
      name: this.props.name
    }
  }

  render() {
    if (this.props.currentStep !== 2) {
      // Prop: The current step
      return null;
    }
    return (
      <div
        class="container"
      >
        <h2 style={{textAlign: "center"}}>Customize your profile</h2>
        <div class="form-group">
          <label for="name">
            <FontAwesomeIcon icon="user-circle" />
            &thinsp;My name is:
          </label>
          <input
            name="name"
            class="form-control"
            id="name"
            value={this.state.name}
            onChange={(e) => {
              this.setState({ name: e.target.value }, () => {
                this.props.handleChange(e, true);
              });
            }}
          ></input>
        </div>
        <div class="form-group">
          <label for="name">
            <FontAwesomeIcon icon="users" />
            &thinsp;I want to be: *
          </label>
          <Select
            required
            closeMenuOnSelect={false}
            defaultValue={[]}
            isMulti
            name="colors"
            options={options}
            className="basic-multi-select"
            classNamePrefix="select"
          ></Select>
        </div>
        <div class="form-group">
          <label for="dob">
            {" "}
            <FontAwesomeIcon icon="calendar-alt" />
            &thinsp;My Birth Year:
          </label>
          <input
            name="dob"
            class="form-control"
            id="dob"
            value={this.state.dob}
            onChange={(e) => {
              this.setState({ dob: e.target.value }, () => {
                this.props.handleChange(e, true);
              });
            }}
          ></input>
        </div>
      </div>
    );
  }
}
export default RegStep2;
