import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  fetch('http://localhost:5000/')
  .then(function(response) {
    response.json().then(function(resp) {
     document.getElementById('para').innerHTML = resp.response;
     console.log("HELLO");
    });
  });
  
  return (
    <div className="App">
      <header >
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      
      </header>
      <p >Hello from react Updated</p> 
      <p >Response from express docker:</p> 
      <p id='para'></p> 
    </div>
  );
}

export default App;
