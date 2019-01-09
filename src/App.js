import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
        <div className="AddSequencer">
          <button type="button" className="btn btn-primary">
            Choose sequencer.
          </button>
          <ul className="list-group InnerText">
            <a href="#" className="list-group-item list-group-item-action">
              Factorial
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Fibonacci
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Range
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Prime
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Partial Sum
            </a>
          </ul>
        </div>
        <div className="card InnerText" style={{width: '18rem'}}>
          <div className="card-body">
            <h5 className="card-title d-flex  justify-content-around align-items-center">
              {/* <img src={logo} className="App-logo" alt="logo" /> */}
              <div>
                Partial Sum
              </div>
              <a href="#" className="btn btn-primary btn-sm">Next</a>
            </h5>

            <ul className="list-group List">
              <li className="list-group-item d-flex  justify-content-around">
                <div className="ItemIndex">
                  #2
                </div>
                <div className="ItemValue">
                  45
                </div>
              </li>
              <li className="list-group-item d-flex  justify-content-around">
                <div className="ItemIndex">
                  #1
                </div>
                <div className="ItemValue">
                  20
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
