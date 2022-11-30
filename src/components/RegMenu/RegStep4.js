import React, { Component } from "react";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const options = [
  { label: "A friend", value: "friend" },
  { label: "Job support", value: "job" },
  { label: "Helping others", value: "helping", disabled: true },
  { label: "Other", value: "other" },
];

class RegStep4 extends Component {
  state = {
    intrest: [],
    visable: false,
  };

  // handleChange = (intrest) => {
  //     this.setState({ intrest });
  //     var result = jsObjects.find(obj => {
  //       return obj.value === "other"
  //     })
  //     if(result !== undefined){
  //       this.setState({visable:true});
  //     }else{
  //       this.setState({visable:false});
  //     }

  //   }
  render() {
    // const { intrest } = this.state;
    if (this.props.currentStep !== 4) {
      // Prop: The current step
      return null;
    }
    return (
      <div
        class="container"
      >
        <h2 style={{textAlign: "center"}}>What are you looking for?</h2>
        <div class="form-group">
          <label for="name">
            <FontAwesomeIcon icon="comment-dots" />
            &thinsp;I want:
          </label>
          <Select
            closeMenuOnSelect={false}
            defaultValue={[]}
            isMulti
            options={options}
            className="basic-multi-select"
            classNamePrefix="select"
            //onChange = {e => {this.handleChange(e) ;this.props.handleChange() }}
          />
        </div>
        {this.state.visable && (
          <div>
            <label> What other interest do you have?</label>
            <input class="form-control" id="other info"></input>
          </div>
        )}
      </div>
    );
  }
}
export default RegStep4;
