import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sequencer from './components/Sequencer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Title OutterText">
          Engineering Full Stack Dev Test - 9 Jan 2019
          <p className="Author">
            Bruno Reis | bruno.p.reis@gmail.com
          </p>
        </div>
        <Sequencer />
      </div>
    );
  }
}

export default App;
