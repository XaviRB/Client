import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class RegStepPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      email: this.props.email,
      phone: this.props.phone,
      name: this.props.name,
      dob: this.props.dob,
      isEmptyState: false,
      edit: "edit",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // Checking if any props values changed to show to user
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.username !== this.state.username) {
      this.setState({username: prevProps.username});
    }
    if (prevProps.email !== this.state.email) {
      this.setState({email: prevProps.email});
    }
    if (prevProps.phone !== this.state.phone) {
      this.setState({phone: prevProps.phone})
    } 
    if (prevProps.name !== this.state.name) {
      this.setState({name: prevProps.name})
    }
    if (prevProps.dob !== this.state.dob) {
      this.setState({dob: prevProps.dob})
    }
    
  }

  handleChange(evt) {
    evt.preventDefault();
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleClick(event) {
    if (this.state.isEmptyState === false) {
      this.setState({ isEmptyState: true });
      this.setState({ edit: "save" });
    } else {
      this.setState({ isEmptyState: false });
      this.setState({ edit: "edit" });
    }
    event.preventDefault();
  }

  render() {
    if (this.props.currentStep !== 6) return null;
    return (
      <div class="container" style={{ paddingTop: "50px" }}>
        {this.state.isEmptyState && (
          <div>
            <div class="form-group">
              <label for="name">
                <FontAwesomeIcon icon="address-card" />
                &thinsp;Username:&#160;
              </label>
              <input
                type="text"
                value={this.state.username}
                onChange={(e) => {
                  this.setState({ username: e.target.value });
                }}
              />
            </div>
            <div class="form-group">
              <label for="email">
                <FontAwesomeIcon icon="envelope" />
                &thinsp; Email address:&#160;
              </label>
              <input
                type="text"
                value={this.state.email}
                onChange={(e) => {
                  this.setState({ email: e.target.value });
                }}
              />
            </div>
            <div class="form-group">
              <label for="phone">
                <FontAwesomeIcon icon="phone-square" />
                &thinsp; Phone Number:&#160;
              </label>
              <input
                type="text"
                value={this.state.phone}
                onChange={(e) => {
                  this.setState({ phone: e.target.value });
                }}
              />
            </div>
            <div class="form-group">
              <label for="nameTwo">
                <FontAwesomeIcon icon="user-circle" />
                &thinsp; Your Name:&#160;
              </label>
              <input
                type="text"
                value={this.state.name}
                onChange={(e) => {
                  this.setState({ name: e.target.value });
                }}
              />
            </div>

            <div class="form-group">
              <label for="Birth">
                <FontAwesomeIcon icon="calendar-alt" />
                &thinsp; Your Birth Year:&#160;
              </label>
              <input
                type="text"
                value={this.state.dob}
                onChange={(e) => {
                  this.setState({ dob: e.target.value });
                }}
              />
            </div>
          </div>
        )}

        {!this.state.isEmptyState && (
          <div>
            <div class="form-group">
              <label for="name">
                <FontAwesomeIcon icon="address-card" />
                &thinsp; Username:&#160;
              </label>
              <label> {this.state.username} </label>
            </div>

            <div class="form-group">
              <label for="email">
                <FontAwesomeIcon icon="envelope" />
                &thinsp; Email address:&#160;
              </label>
              <label> {this.state.email} </label>
            </div>

            <div class="form-group">
              <label for="phone">
                <FontAwesomeIcon icon="phone-square" />
                &thinsp; Phone Number:&#160;
              </label>
              <label> {this.state.phone} </label>
            </div>

            <div class="form-group">
              <label for="nameTwo">
                <FontAwesomeIcon icon="user-circle" />
                &thinsp; Your Name:&#160;
              </label>
              <label> {this.state.name} </label>
            </div>

            <div class="form-group">
              <label for="Birth">
                <FontAwesomeIcon icon="calendar-alt" />
                &thinsp; Your Birth Year:&#160;
              </label>
              <label> {this.state.dob} </label>
            </div>
          </div>
        )}
        <div>
          <button class="btn btn-dark m-1" onClick={this.handleClick}>
            {this.state.edit}
          </button>
        </div>
      </div>
    );
  }
}
export default RegStepPreview;
