import React from 'react';
import logo from './logo.svg';
import './App.css';
//import app from '../server/server';

function App() {

  function constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  function callAPI() {
    fetch("http://localhost:5000/express_backend")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  }

  function componentWillMount() {
    this.callAPI();
  }

  function myFunction() {
    let response = fetch("http://localhost:5000/express_backend");
    return response;
  }

  
  return (
    <div className="App">
      <header className="App-header">
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
          Learn React.
        </a>
      </header>
      <body>
        <p>Blogging Platform App</p>
        <a
          href="https://raddevon.com/articles/10-great-web-development-learning-project-ideas/"
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a><br></br>
        <button onclick={myFunction}>Create new post</button>
        <a href="http://localhost:5000/">This is the backend</a>
        <p className="App-intro">{this.state.apiResponse}</p>
      </body>
    </div>
  );
}

export default App;
