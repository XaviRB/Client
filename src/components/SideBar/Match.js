import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import Point from './Point.js'
import { withFirebase } from '../Firebase';
import "./style.css"


class Match extends Component {

    constructor(props) {
        super(props)
        this.state = {
            people: [],
            show: false,
            contacts: null
        };
        this.onOpenModal = this.onOpenModal.bind(this)
        this.hideModal = this.hideModal.bind(this)
        this.createMap = this.createMap.bind(this)
    }

    componentDidMount() {
        var rooms = []
        this.props.firebase.getUsers().then(snapshot => {

            snapshot.forEach(doc => {
                const {userId, username } = doc.data();
                const person = {username : username, userId: userId}
                if (person.username != this.props.authUserID) {
                    rooms.push(person)
                }
            })
        })
        console.log(rooms)

        this.setState({people: rooms})
        
    }

    test = () => {
        console.log("MyTest")
    }

    onOpenModal = () => {
        this.setState({show: true})
        
    }
    hideModal = () => {
        this.setState({show: false})
    }

    createMap = () => {
        if (this.state.people.length > 0) {
            const vals = this.state.people.map((person) => <Point username={person.username} userId={person.userId} hideModal={this.hideModal} dispatch={this.props.dispatch}/> )
            return vals
        }
        else {
            console.log("Issues")
        }
        
    }

    render() {
        return(
            <>
                <button class="btn btn-light" onClick={this.onOpenModal}>
                    <h6>Match</h6>
                </button>
                
                <Modal show={this.state.show} onHide={this.hideModal} className="modal">
                    <Modal.Header>
                        <Modal.Title>List of Users to match with: </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        {this.createMap()}
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

export default withFirebase(Match)