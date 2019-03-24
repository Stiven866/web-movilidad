import React, { Component } from 'react';
import Paperbase from './components/Paperbase'
import SignIn from './components/signIn_and_signUp/SignIn.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      formValid: false
    }
  }
  handleForm=({ formValid })=>{
    console.log({ formValid });
    this.setState({ formValid });
  }
  render() {
    return(
      <div>
       { !this.state.formValid ? <SignIn onForm={this.handleForm}/> : <Paperbase/> }
      </div>
    );
  }
}

export default App;
