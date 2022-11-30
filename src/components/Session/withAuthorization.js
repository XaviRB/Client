import React from 'react';
import {withRouter} from 'react-router-dom';
import { compose } from 'recompose';
import { connect as ReduxConnect} from 'react-redux';
// import AuthUserContext from './context';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes'; 

const withAuthorization = condition => Component => {
    class WithAuthorization extends Component{
        componentDidMount(){
            this.listener = this.props.firebase.onAuthUserListener(
                authUser => {
                    if(!condition(authUser)){
                        this.props.history.push(ROUTES.LOG_IN);
                    }
                },
                () => {
                    this.props.history.push(ROUTES.LOG_IN)
                }
            );
        }

        componentWillUnmount(){
            this.listener && this.listener();
        }

        render(){
            return condition(this.props.authUser) ? (<Component {...this.props} />) : null;
        }

    }
    const mapStateToProps = state => ({
        authUser: state.sessionState.authUser,
    });

    return compose(withRouter, withFirebase, ReduxConnect(mapStateToProps))(WithAuthorization);
    
};

export default withAuthorization;