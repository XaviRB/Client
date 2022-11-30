import React, { Component } from 'react';

class Help extends Component {
    render() { 
        return (  
            <div class="container"
            style={{
              paddingTop: "50px",
            }}>
                <h2 class="text-center">Welcome to our help page, </h2>
                <h2 class="text-center" style={{paddingBottom: "20px"}}>we are here to help!</h2>
                <h2 class="text-start">Log in: </h2>
                <p class="text-start" style={{textIndent: "40px", fontSize: "20px"}}>Log in button will redirect you to log in page.</p>
                <h2 class="text-start">Sign up: </h2>
                <p class="text-start" style={{textIndent: "40px", fontSize: "20px"}}>Sign up button will redirect you to register into our website
                                    if it is your first time visit the website.</p>
                <h2 class="text-start">My Profile: </h2>
                <p class="text-start" style={{textIndent: "40px", fontSize: "20px"}}>My Profile button will redirect you to your own profile where
                                    you can edit profile.</p>
                <h2 class="text-start">Matching: </h2>
                <p class="text-start" style={{textIndent: "40px", fontSize: "20px"}}>Matching button will redirect you to the matching program
                                    with mentee/mentor.</p>
                <h2 class="text-start">Setting: </h2>
                <p class="text-start" style={{textIndent: "40px", fontSize: "20px"}}>Setting button will redirect you to setting page where you can
                                    edit the notification settings, as well as your information
                                    regarding email and phone number.</p>
                <h2 class="text-start">Log out: </h2>
                <p class="text-start" style={{textIndent: "40px", fontSize: "20px"}}>Log out button will log you out from your own account.</p>                   
                
            </div>
        );
    }
}
 
export default Help;