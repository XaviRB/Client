import React, { Component } from 'react'
import MainPage from '../MainPage'
import Home from '../Home'
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'
import {connect as ReduxConnect} from 'react-redux'

class Navigation extends Component {

    render() {
        return (
            <div>
                {this.checkPage()}
            </div>   
        )
    }
    checkPage() {
        if (this.props.authUser) {
            return <MainPage />
        }
        else {
            return <Home />
        }
    }
}

const mapStateToProps = state => ({
    authUser: state.sessionState.authUser

})

export default compose(withRouter, ReduxConnect(mapStateToProps))(Navigation)