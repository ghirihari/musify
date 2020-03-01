import React, { Component } from 'react'
import firebase from './config/fire'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import {Input, Form, FormGroup} from 'reactstrap';

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = { signedin: false}
  }
  
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }
  componentDidMount(){
    document.title = "Musify";
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const pass = document.querySelector('#pass').value;
    // console.log(email,pass)
    firebase.auth().signInWithEmailAndPassword(email, pass).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }

  signup(e){
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const pass = document.querySelector('#pass').value;
    firebase.auth().createUserWithEmailAndPassword(email, pass).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
  }

render(){
  return (
    <Form className="login-form">
      <h3 className="text-center">Login Page</h3>
      <FormGroup>
        <label>Email ID</label>
        <Input type='email' placeholder="Email ID" id="email"></Input>
      </FormGroup>
      <FormGroup>
        <label>Password</label>
        <Input type='password' placeholder="Password" id="pass"></Input>
      </FormGroup>


        <button className="btn-lg btn-dark btn-block" onClick={this.login}>Login</button>
        <div className="text-center p-3">- or connect with -</div>
            <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth = {firebase.auth()}
            />       
        <div className="text-center p-3">
          <button className="btn btn-link" onClick={this.signup}>Signup</button>
        </div>
    </Form>
  );
 }
} 

export default Login;