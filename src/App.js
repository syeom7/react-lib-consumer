import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ComponentOne, ComponentTwo, ComponentThree } from 'syed-react-lib';
import { Button, Header } from 'lft-react-lib';

function App() {
  return (
    <div className="App">
      <Header />
      <Button />
      <ComponentOne />
      <ComponentTwo />
      <ComponentThree />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload!
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
