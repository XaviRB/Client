import React, { Component } from "react";

import * as ROUTES from '../../constants/routes'

class ForgotPassword extends Component {
    render() {
        return (
            <div>
                <a href={ROUTES.MAINPAGE}>
                    Forgot Password?
                </a>
            </div>
        )
    }
}

export default ForgotPassword