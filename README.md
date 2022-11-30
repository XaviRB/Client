# Autism Strength Website Client

This is the front end of our application.

The master branch of this repo is hosted on: https://asd-mentoring.netlify.app/

The server github repo: https://github.com/ivanchuprinov/autism_strength_server

The server is hosted on: https://console.firebase.google.com/project/autismstrength-ed836/overview
  - Note that the Firebase keys are currently stored within React Website, will want to move them to seperate .env file later

### *Highly recommend to get some familiarity with React first (e.g., walk through a tutorial and make/experiment with your own react app; I used this to get started: https://youtu.be/Ke90Tje7VS0). It's quite different from plain old JavaScript and the code we wrote ain't pretty, so it's in your best interest to come prepared.*

## **_Client Directory Structure:_**
- `src` directory contains source code:
  - `App.js` is the main component that the front-end app is built off of. Has a router (kind of like the `app.js` in the server). 
  - `components` directory contains all components of the app.
  - `constants` directory containing all of the contstant variables used throughout the project
  - `redux` directory dealing with the actions, reducers and the store used to dispatch and use values mapped into this store
  - `public` directory is important for hosting.
