import React,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import fire from './Fire';
import Home from './Home';
import LoginSignUp from './LoginSignUp';

class App extends Component{
  constructor(){
    super();
    this.state={user:null}

  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({user});
      }
      else
      {
        this.setState({user:null});
      }
    });
  }
render(){
  return(<div>
    { this.state.user ? (<Home/>):(<LoginSignUp/>)}
  </div>);
}
}

 

export default App;
