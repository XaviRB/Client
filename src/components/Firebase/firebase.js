import app from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//import { collection, query } from "firebase/firestore";


const config = {
    apiKey: "AIzaSyCovvRSoNFhpcqVDOufAOx8qRNWz_ZPeWM",
    authDomain: "autismstrength-ed836.firebaseapp.com",
    databaseURL: "https://autismstrength-ed836-default-rtdb.firebaseio.com",
    projectId: "autismstrength-ed836",
    storageBucket: "autismstrength-ed836.appspot.com",
    messagingSenderId: "266619015130",
    appId: "1:266619015130:web:8de259cbda6e325353fae3",
    measurementId: "G-D0Z4SQHZE4"
};

class Firebase {
    constructor () {
        app.initializeApp(config)

        this.emailAuthProvider = app.auth.EmailAuthProvider;
        this.auth = app.auth();
        this.db = app.firestore();
        //this.users = this.db.collection("users")
    }

    // *** Auth API ***
    async doCreateUserWithEmailAndPassword(username, email, password){
        // Create User in authentication 
        const ret = await this.auth.createUserWithEmailAndPassword(email, password);

        // Create User doc in firestore
        this.db.collection("users").add({
            userId: ret.user.uid,
            username: username
        });

        return ret;
    }

    doSignInWithEmailAndPassword(email, password){
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    doSignOut(){
        return this.auth.signOut();
    }

    // returns a Promise that will result in the return of the username associated with the userId passed
    doGetUserName(userId){
        return new Promise(resolve => {
            const snapshot = this.db.collection("users").where("userId", "==", userId).get();
            snapshot.then((snapshot) => {
                snapshot.forEach((doc) => {
                    const { username } = doc.data();
                    //console.log("name " + username);
                    resolve(username);
                });
            }) 
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
        });
    }

    // Opens a snapshot listener for each contact's conversation
    openMessageListener(callback){
        if (this.auth.currentUser == null){
            return;
        }

        const authorizedUserId = this.auth.currentUser.uid;

        const snapshot = this.db.collection("users").where("userId", "==", authorizedUserId).get();
    
        snapshot.then((snapshot) => {
            snapshot.forEach((doc) => {

            const contactSnap = doc.ref.collection("contacts").get();

            contactSnap.then((contactSnap) => {
                contactSnap.forEach((doc) => {
                    doc.ref.collection("messages").onSnapshot((messageSnap) => {
                        return this.doGetContacts(callback);
                    })
                });                   
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });

            });
        }) 
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
    }

    // gets the contacts and all their info (including messages) for each contact the user has
    doGetContacts(callback) {
        let contacts = [];
        if (this.auth.currentUser == null){
            return 
        }
        const authorizedUserId = this.auth.currentUser.uid;

        const userSnapshot = this.db.collection("users").where("userId", "==", authorizedUserId).get();
    
        userSnapshot.then((snapshot) => {
            snapshot.forEach( async (doc) => {

            const {userId: authorizedUserId, username: authorizedUserName } = doc.data();

            const contactSnap = await doc.ref.collection("contacts").get();

            let waitOn = []

            contactSnap.forEach((doc) => {
                waitOn.push(this.getMessagesFromContact(doc, contacts, authorizedUserId, authorizedUserName))
            })

            await Promise.all(waitOn)
               
            callback(contacts)
            });
        }) 
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
          
    }
     
    // fetches messages from a given contact document
    getMessagesFromContact(doc, contacts, authorizedUserId, authorizedUserName){
        return new Promise(resolve => {
            const {contactUserId, name} = doc.data();
    
            let messages = [];
            const messageSnap = doc.ref.collection("messages").get();

            messageSnap.then((messageSnap) => {
                messageSnap.forEach((doc) => {
                    const {message, senderId, receiverId, timestamp} = doc.data();
                    const seconds = timestamp != null ? timestamp.toDate() : 0;
                    const weAreSender = senderId === authorizedUserId;
                    const from = (weAreSender) ? authorizedUserName : name;
                    const to = (!weAreSender) ? authorizedUserName : name;
                    
                    messages.push( {from, to, message, timestamp: seconds, weAreSender} );
                });                
                contacts.push({contactUserId, name, messages})
                resolve();
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
        })
    }


    // Adds the message to the user's, specified by id1, list of messages from contact id2
    doAddMessage(id1, id2, weAreSender, msg){
        if (this.auth.currentUser != null){
            const authorizedUserId = this.auth.currentUser.uid;
            
            if (id1 === ""){
                id1 = authorizedUserId;
            } else if (id2 === "") {
                id2 = authorizedUserId;
            }

            const snapshot = this.db.collection("users").where("userId", "==", id1).get();

            snapshot.then((snapshot) => {
                snapshot.forEach((doc) => {  
                    const contactsSnap = doc.ref.collection("contacts").where("contactUserId", "==", id2).get();

                    contactsSnap.then((contactsSnap) => {
                        contactsSnap.forEach((doc) => {
                            const messageRef = doc.ref.collection("messages");

                            const senderId = (weAreSender) ? id1 : id2;
                            const receiverId =  (weAreSender) ? id2 : id1;
                            

                            //Add message to collection
                            messageRef.add({
                                message: msg,
                                receiverId: receiverId,
                                senderId: senderId,
                                timestamp: app.firestore.FieldValue.serverTimestamp()
                            });

                        });
                    })
                    .catch((error) => {
                        console.log("Error adding documents: ", error);
                    });
                });
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
        }
    }

    async addContact(userId1, username1, userId2, username2) {
        var uncreated = 0
        const snapshot2 = this.db.collection("users").where("userId", "==", userId1).get()
        console.log(snapshot2)

        if (this.auth.currentUser != null) {
            const snapshot = this.db.collection("users").where("userId", "==", userId1).get()

            snapshot.then((snapshot) => {
                snapshot.forEach((doc) => {
                    
                    const userSnap = doc.ref.collection("contacts").where("contactUserId", "==", userId2).get()
                    
                    userSnap.then((userSnap) => {
                        if (userSnap.empty == true) {
                            const contact = doc.ref.collection("contacts").add({
                                contactUserId: userId2,
                                name: username2
                            })

                            const snapshot2 = this.db.collection("users").where("userId", "==", userId2).get()
                            snapshot2.then((snapshot2) => {
                                console.log(snapshot2)
                                snapshot2.forEach((doc) => {
                                    const contact = doc.ref.collection("contacts").add({
                                        contactUserId: userId1,
                                        name: username1
                                    })
                                })
                            })
                        }
                    })
                    
                })
            })
                
            
        }
    }

    // OnAuthUserListener will check to see if any changes have occurred to the authUser (eg. sign in/log out)
    onAuthUserListener(next, fallback){
        this.auth.onAuthStateChanged(authUser => {
            if(authUser) {

                const snapshot = this.db.collection("users").where("userId", "==", authUser.uid).get();

                // Get the data of every user that matches the uid in firestore
                snapshot.then((snapshot) => {
                    snapshot.forEach((doc) => {  
                        const dbUser = doc.data();
                        //TODO: error here?
                        if(dbUser != null && !dbUser.roles){ 
                            dbUser.roles = {};
                        }
                        
                        // Create newAuthUser which will be used when grabbing from redux
                        const newAuthUser = {
                            uid: authUser.uid,
                            emails: authUser.email,
                            username: authUser.username, 
                            firebaseUser: authUser,
                            providerData: authUser.providerData,
                            ...dbUser
                        };
                        //console.log(authUser)
                        // console.log(newAuthUser)
                        
                        next(newAuthUser);
                    })
                }); 
            } else {
                fallback();
            }
        });
        fallback();
    }

    async getUsers() {
        const snapshot = this.db.collection("users").get()
        return snapshot
    }
    
    // *** User API ***
    users = () => this.db.collection("users").get()
    user = uid => { return this.db.collection('users').where("userId", "==", uid).get() };

}

export default Firebase