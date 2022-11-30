import React from 'react';
// import AuthUserContext from './context';
import { withFirebase } from '../Firebase';
import { connect as ReduxConnect } from 'react-redux';
import { compose } from 'recompose';
import setAuthUserAction from '../../redux/actions/setAuthUserAction'

const withAuthentication = Component => {
    class WithAuthentication extends Component {
        constructor(props){
            super(props);
            
            this.props.onSetAuthUser(JSON.parse(localStorage.getItem('authUser')));
        }
    
        componentDidMount(){
            this.listener = this.props.firebase.onAuthUserListener(
                authUser => {
                    localStorage.setItem('authUser', JSON.stringify(authUser));
                    this.props.onSetAuthUser(authUser);
                },
                () => {
                    localStorage.removeItem('authUser');
                    this.props.onSetAuthUser(null);
                }
            );
        }
    
        componentWillUnmount(){
            this.listener && this.listener();
        }

        render(){
            return (
                <Component {...this.props} />
            );
        }
    }

    const mapDispatchToProps = dispatch => ({
        onSetAuthUser: authUser => dispatch(setAuthUserAction(authUser))
    })

    return compose(
        withFirebase,
        ReduxConnect(
            null,
            mapDispatchToProps,
        
        ),        
    )(WithAuthentication);
};



export default withAuthentication;