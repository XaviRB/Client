import { FormHelperText, Input, InputLabel } from "@material-ui/core";
import React, { Component } from "react"
import { Form, Col } from "react-bootstrap";


//Contact form Component that can be used around the website if needed 

class Contact extends Component {
    render () {
        return (
            <div>
                <h2 className="contact-h1">Contact Us Below: </h2>
                <div className="contact-outer">
                
                <Form> 
                    <Form.Row>
                        <Form.Group as={Col} controlId="form.Email">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" required/>
                        </Form.Group>
                        
                        <Form.Group as={Col} controlId="form.Name">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control type="text" placeholder="Enter name:" required/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="form.Textarea">
                        <Form.Label>Message:</Form.Label>
                        <Form.Control as="textarea" rows={3} required/>
                    </Form.Group>                  
                    <button type="submit" class="btn btn-success m-1 btn-block" disabled>
                        Submit
                    </button>

                </Form>
            </div>
            </div>
             
        )
    }
}

export default Contact;