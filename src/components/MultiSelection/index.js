import React, { Component } from "react";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const intrests = [
  { label: "Books", value: "books" },
  { label: "Sports", value: "sports" },
  { label: "Video Games", value: "video games", disabled: true },
  { label: "Movies", value: "movies" },
  { label: "Programming", value: "programming" },
  { label: "Exercise", value: "exercise" },
  { label: "Others", value: "Others" },
];

class MultiSelection extends Component {
  state = {
      // Initial message
      intrest: [],
    };
    handleChange = (intrest) => {
      this.setState({ intrest });
      console.log(intrest);
    }
  render() {
    const { intrest } = this.state;
    return (
      <div class="container">
        <FontAwesomeIcon icon="smile-beam" />
        &thinsp;Things I like:
        <Select
          closeMenuOnSelect={false}
          defaultValue={this.state.intrest}
          isMulti
          name="colors"
          options={intrests}
          className="basic-multi-select"
          classNamePrefix="select"
          value = {intrest}
          onChange = {this.handleChange}
        />
        {intrest.map(o => <p>{o.value}</p>)}
      </div>
    );
  }
}


export default MultiSelection;