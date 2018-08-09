import React, { Component } from 'react';
import './App.css';
import Map from './components/Map'
import Details from './components/Details';
import Header from './components/Header';
import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Map/>
        <Search/>
        <div className="DetailsContainer" >
          <Details/>
        </div>
      </div>
    );
  }
}

export default App;
