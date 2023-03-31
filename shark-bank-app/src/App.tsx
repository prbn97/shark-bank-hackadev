import React from 'react';
import './assets/styles/baby-logo.css';
import './App.css';
import babieLogo from './assets/images/baby-logo.png';
import './shark.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={babieLogo} className="baby-logo" alt="logo" />
        <h3>
          Shark Bank, Mergulhe e descubra novas oportunidades!
        </h3>
        <a
          className="App-link"
          href="https://github.com/LKSFerreira/sharp-coders-hackadev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Reposiório HackaDev Babies Sharp
        </a>
      </header>
    </div>
  );
}

export default App;
