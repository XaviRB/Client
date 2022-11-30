import React, { Component } from "react";
import MultiSelection from "../MultiSelection";

class RegStep3 extends Component {
  render() {
    if (this.props.currentStep !== 3) {
      // Prop: The current step
      return null;
    }
    return (
      <div
        class="container"

      >
        <h2 style={{textAlign: "center"}}>Select your interests. *</h2>
        <MultiSelection></MultiSelection>
        {/* <div class="form-group">
                <label for="name">Things I like:</label>
            </div>
            <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                Select interests
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a class="dropdown-item" href="#">Books</a></li>
                <li><a class="dropdown-item" href="#">Sports</a></li>
                <li><a class="dropdown-item" href="#">Video Games</a></li>
                <li><a class="dropdown-item" href="#">Programming</a></li>
                <li><a class="dropdown-item" href="#">Exercise</a></li>
            </ul>
            </div> */}
        {/*<label for="name">Things I like:</label>
        <select id="type">
          <option value="text1">Books</option>
          <option value="text2">Sports</option>
          <option value="text3">Video Games</option>
          <option value="text4">Movies</option>
          <option value="text5">Programming</option>
          <option value="text6">Exercise</option>
          <option value="text7">Others</option>
          </select> */}
        {/* <h2>You selected Books!</h2>
        <label for="genre">Favorite genre of book?  </label>
        <input type="genre" class="form-control" id="genre"></input>
        <label for="book">Favorite book?  </label>
        <input type="book" class="form-control" id="book"></input> */}
      </div>
    );
  }
}
export default RegStep3;
