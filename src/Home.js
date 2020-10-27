import React, {Component} from 'react';
import fire from './Fire';
class Home extends Component {

    logout = () => {
        fire.auth().signOut();
    }

    render(){
        return(
            <div>
                <h1>You are a registeruser!</h1>
                <button onClick={this.logout}>Logout</button>
            </div>
        )
    }
}

export default Home;
