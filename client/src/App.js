import React from 'react';
import logo from './logo.svg';
import './App.css';
//import app from '../server/server';

function App() {

  // state = {
  //   data: null
  // };
  // // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  // callBackendAPI = async () => {
  //   const response = await fetch('/express_backend');
  //   const body = await response.json();
  //   if (response.status !== 200) {
  //     throw Error(body.message) 
  //   }
  //   return body;
  // };

  // function componentDidMount() {
  //   // Call our fetch function below once the component mounts
  //   this.callBackendAPI()
  //   .then(res => this.setState({ data: res.express }))
  //   .catch(err => console.log(err));
  // };

  // componentDidMount();

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
        <button onclick={myFunction()}>Create new post</button>
        <a href="http://localhost:5000/">This is the backend</a>
        {/* <p>{this.state.data}</p> */}
      </body>
    </div>
  );
}

export default App;
