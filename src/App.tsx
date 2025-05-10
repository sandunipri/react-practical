/*
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default App;
*/

import {Component} from "react";
import './App.css';
import {Counter} from "./Counter/Counter";

class App extends Component{
  render() {
    return (
        <div className = "app">
            {/*if you have any content using this type*/}
            <Counter data={"sanduni"}></Counter>
            {/*if you have't any content using this type*/}
            {/*<Counter/>*/}
        </div>
    );
  }
}
//why use export default - export default is used to export a single value or component from a module.
export default App;