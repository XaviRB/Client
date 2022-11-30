import React, { Component } from "react";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const options = [
  { label: "A friend", value: "friend" },
  { label: "Job support", value: "job" },
  { label: "Helping others", value: "helping", disabled: true },
  { label: "Other", value: "other" },
];

class RegStep5 extends Component {
  state = {
    visable: false,
  };

  render() {
    // const { intrest } = this.state;
    if (this.props.currentStep !== 5) {
      // Prop: The current step
      return null;
    }
    return (
      <div
        class="container"
      >
        <h2 style={{textAlign: "center"}}>Research Project</h2>
        <p>This website has been created by a research team at Western Washington University. 
            The purpose of this website is to assess the value that a mentor/mentee website can bring 
            to the autistic community. Because of this, we ask that you only continue if you
            have an autism diagnosis and/or you self identify as autistic.</p>

        <p>Furthermore, all information provided for the use of this website will be stored in 
            a google firestore database and will be used for the assessment and study of mentor/mentee
            websites and their effect on the autistic community.</p>
      </div>
    );
  }
}
export default RegStep5;
