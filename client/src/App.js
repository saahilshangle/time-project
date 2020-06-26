import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { apiResponse: "First" };
    console.log("Check constructor log location.")
  }

  // eslint-disable-next-line
  callAPI() {
    fetch("http://localhost:5000/express_backend")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
    console.log("Check callApi() function call here.")
  }

  componentWillMount() {
    this.callAPI();
  }

  myFunction() {
    let response = fetch("http://localhost:5000/express_backend");
    return response;
  }

  render() {
    console.log("I am in render().")
    return (
      <div className="App">
        <header className="Menu-bar">
          <p className="logo-font">Saahil's Blog</p>
        </header>
        <body>
          <a
            href="https://raddevon.com/articles/10-great-web-development-learning-project-ideas/"
            className="App-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more
          </a><br></br>
          {/* <button onclick={myFunction}>Create new post</button> */}
          <a href="http://localhost:5000/">This is the backend</a>
          <p>{this.state.apiResponse}</p>
        </body>
      </div>
    );
  }
  
}

export default App;
