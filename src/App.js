import React, { Component } from 'react';
import Paperbase from './components/Paperbase'
import SignIn from './components/signIn_and_signUp/SignIn.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      firstName: null,
      lastName: null,
      identification:null,
      email: null
    }
  }
  handleForm=(e)=>{
    this.setState(state=>({
      firstName:e.firstName,
      lastName:e.lastName,
      identification:e.identification,
      email:e.email,
    }))
  }
  render() {
    const {
      firstName,
      lastName,
      identification,
      email}=this.state
      console.log(`Name:${firstName}`, `lastName: ${lastName}`, `id: ${identification}`, `email: ${email}`);
    return (
      <div>

        {(firstName && lastName && email && identification) === null ? <SignIn onForm={this.handleForm}/> : <Paperbase/>}
      </div>
    );
  }
}

export default App;
