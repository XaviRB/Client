import React, { Component, PropTypes } from 'react';
import { connect as ReduxConnect } from 'react-redux'
import { withFirebase } from '../Firebase';
import { compose } from "recompose";
import {Col} from 'react-bootstrap';
import { bindActionCreators } from "redux";
import { fetchContacts } from '../../redux/actions/asyncActions.js';
// import { useSelector, useDispatch } from 'react-redux';
// import {
//     MenuItem,
//   } from "react-pro-sidebar";

class Point extends Component {

    constructor(props) {
        super(props)
        this.generateRoom = this.generateRoom.bind()
    }

    generateRoom = () => {
        console.log(this.props.userId)
        console.log("Auth user is: " + this.props.authUser.userId)

        this.props.firebase.addContact(this.props.authUser.userId, this.props.authUser.username, this.props.userId, this.props.username)
        
        this.props.fetchMyContacts(this.props.firebase)
        
        this.props.hideModal()
        // Create a room between current authUser and userId grabbed
        // Push authUser to that new room
        
    }

    render() {
        return (
            <div className="data-point">
                <Col>
                <h3 className="data-point-h3">{this.props.username}</h3> 
                </Col>
                <Col>
                <button onClick={this.generateRoom}>Match</button>
                </Col>
                
            </div>
        )
    }
}

Point.propTypes = {
    fetchContacts: PropTypes,   
}

const mapStateToProps = state => ({
    authUser: state.sessionState.authUser,
  });  


const mapDispatchToProps = (dispatch) => {
    return {
        fetchMyContacts: () => dispatch(fetchContacts())
    }
}


export default compose(withFirebase, ReduxConnect(mapStateToProps, mapDispatchToProps))(Point)