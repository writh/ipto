import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios';
import {loginUser, registerUser} from '../ducks/reducer'
import '../App.css';


class Auth extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      // profile_pic: '',
    }

  }

    handleChange(event, name) {
      const value = event.target.value;
      this.setState({ [name]: value });
    }
    handleNewUser() {
      const newUser = {
        username: this.state.username,
        password: this.state.password,
        // profile_pic: this.state.profile_pic,
      };
      this.props.registerUser(newUser)
      axios.post('/api/user', newUser).then(() => {
        this.handleLogin()
      });
    }

    handleLogin() {
      const user = {
        username: this.state.username,
        password: this.state.password,
      };
      axios.post('/api/login', user).then(results => {
        console.log(results)
        this.props.loginUser(results.data[0]);
        this.props.history.push('/map')
      });
    }
npm
  render() {
    console.log(this.props.history)
    return (
      <div className="Auth">
      <h3>I.P.T.O.</h3>
        <b>Username</b>
        <input className="username" value={this.state.username} type="text" onChange={(e) => this.handleChange(e, 'username')}/>
        <b>Password</b>
        <input className="password" value={this.state.password} type="text" onChange={(e) => this.handleChange(e, 'password')}/>
        <br/>
        <button onClick={() => this.handleLogin()}>Login</button>
        <button onClick={() => this.handleNewUser()}>Register</button>
      </div>

    );
  }
}


export default connect(state=>state, {loginUser, registerUser} )(Auth)