import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import { withRouter } from 'react-router-dom';

import { compose } from 'recompose';

import * as ROUTES from '../../constants/routes'


class SignOutButton extends Component {
    // Sign out button, when clicked, use firebase to sign out then push user back to home
    render(){
        return(
            <button 
                className="btn btn-outline-light m-1" 
                onClick={(e) => {
                    e.preventDefault();
                    this.props.firebase.doSignOut(); 
                    this.props.history.push(ROUTES.HOME);
                    
                }}
                href="home"
            >Sign Out</button>
        );
    }
}


// Use withRouter to push and withFirebase to use Firebase, SignOutButton is the class
export default compose(withRouter, withFirebase)(SignOutButton);