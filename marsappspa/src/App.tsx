import React from 'react';
import logo from './logo.svg';
import nasaLogo from './nasa-logo-web-rgb.png'
import './App.css';

function NASA() {
  return (
      <div className="NASA">
        <h1>NASA</h1>
        <p>nfaeuifneuiafnuaefuaefnaefae</p>
        <p>feoiasmnfoiaefioamfioaem</p>
        <img src={nasaLogo} className="NASA-logo" height={400} width={800} alt="NASA" />
      </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NASA />
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
