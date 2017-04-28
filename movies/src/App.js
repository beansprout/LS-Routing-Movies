import React, { Component } from 'react';
import Movies from './Movies';
import './App.css';

class App extends Component {
    render() {
        return (
      <div className="App">
        <h1>Movies</h1>
        <Movies />
      </div>
        );
    }
}

export default App;
