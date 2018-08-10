import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import './App.css';
// import Nav from './components/Nav/Nav'
import Routes from './route'

class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
// const nav = this.props.location.pathname === '/' ? "" : 
    return (
      <div className="App">

    {/* <Route component={Nav} /> */}
    <Routes/>
      </div>
    );
  }
}

export default App;