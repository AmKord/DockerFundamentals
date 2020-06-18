import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  fetch('http://localhost:5000/')
  .then(function(response) {
    response.json().then(function(resp) {
     document.getElementById('para').innerHTML = resp.response;
     
    });
  });
  
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      
      </header> */}
      <p >Hello from react</p> 
      <p >Response from express docker:</p> 
      <p id='para'></p> 
    </div>
  );
}

export default App;
