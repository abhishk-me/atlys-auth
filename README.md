# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Auth flow 

The application comprises a home screen, a login screen, and a signup screen. On initial access, the user lands on the home screen, presenting a list of posts and a "create post" component. If the user attempts to engage with the components without being logged in, the app will trigger an authentication modal. Within this modal, the user can choose to either create a new account or log in with an existing one to unlock the features on the home screen.

While elements on the home screen are interactive, they currently don't have any additional functionalities, as this falls outside the scope of the assignment.

For authentication, alongside the modal, dedicated login and signup pages exist, each accessible through specific URL routes.

### Live Demo

Open [https://atlys-auth.vercel.app](https://atlys-auth.vercel.app) to view live demo for this mini app.
