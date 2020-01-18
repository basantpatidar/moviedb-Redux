import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar className="searchbar" />
      </div>
    );
  }
}

export default App;
