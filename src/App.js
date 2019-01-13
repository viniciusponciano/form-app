import React, { Component } from 'react';
import SearchAppBar from './api/utils/SearchAppBar.jsx'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
				<SearchAppBar />
      </div>
    );
  }
}

export default App;
