import React, { Component } from 'react';
import Paperbase from './components/Paperbase'
import SignIn from './components/signIn_and_signUp/SignIn.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      firstName: null,
      lastName: null,
      identifaction:null,
      email: null
    }
  }
  handleForm=(e)=>{
    this.setState(state=>({
      firstName:e.firstName,
      lastName:e.lastName,
      identifaction:e.identifaction,
      email:e.email,
    }))
  }
  render() {
    const {
      firstName,
      lastName,
      identifaction,
      email}=this.state
      console.log(firstName, lastName, identifaction, email);
    return (
      <div>

        {(firstName || lastName || email || identifaction) === null ? <SignIn onForm={this.handleForm}/> : <Paperbase/>}
      </div>
    );
  }
}

export default App;
