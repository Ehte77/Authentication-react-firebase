import React,{Component} from 'react';
//import logo from './logo.svg';
import {TextField} from '@material-ui/core'
import fire from './Fire';

class LoginSignUp extends Component{
  constructor(props){
    super(props);
    this.state={
    email:'',
    password:'',
    fireErrors:'',
    lg:true,
    formTitle:'Authentication'
  };
}

login = e => {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .catch((error) => {
        this.setState({fireErrors: error.message})
    });
}

getAction = action => {
  if(action === 'reg'){
      this.setState({formTitle: 'Register New User', lg: false, fireErrors: ''});
  }else{
      this.setState({formTitle: 'Login', lg: true, fireErrors: ''});
  }
}

handleChange = e => {
this.setState({[e.target.name]: e.target.value});
}
   
register = e => {
  e.preventDefault();
  fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
  .catch((error) => {
  this.setState({fireErrors: error.message})                                                                                    
  });
}

render(){
    let errorNotification = this.state.fireErrors ? 
    ( <div className="Error"> {this.state.fireErrors} </div> ) : null;

    let submitBtn = this.state.lg ? 
    (<input className="lg" type="submit" onClick={this.login} value="Enter" />) : 
    (<input className="lg" type="submit" onClick={this.register} value="Register" />);

     let login_register = this.state.lg ?
    (<button className="registerBtn" onClick={() => this.getAction('reg')}>Register</button>): 
    (<button className="registerBtn" onClick={() => this.getAction('login')}>Login</button>)

  return(<body style={{backgroundColor:'red'}}>
     <div className='form'>
      <div id="title">{this.state.formTitle}</div>
      <div className='body'>
     {errorNotification}

  <form>
    <div>  <TextField id="outlined-basic" label="email" variant="outlined" style = {{width: 400}}
  name='email' type ="text" val={this.state.email}
  onChange={this.handleChange}/>
     </div>

     <div><TextField id="outlined-basic" label="password" variant="outlined" style = {{width: 400}}
  name='password' type ='password' val={this.state.password}
  onChange={this.handleChange}/>
        </div>
   {submitBtn}
  </form>
    {login_register}
          </div>    
  
  </div> </body>);
}

}

 

export default LoginSignUp;
