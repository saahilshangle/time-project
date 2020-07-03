import React from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { apiResponse: "First" };
  }

  // eslint-disable-next-line
  callAPI() {
    fetch("http://localhost:5000/express_backend")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  myFunction() {
    let response = fetch("http://localhost:5000/express_backend");
    return response;
  }

  render() {
    return (
      <div>
        <header>
          <div class="Nav-bar">
            {/* <p>Test</p> */}
            <h4>Saahil's Blog</h4>
            <div class="Nav-bar-right">
              <a href="/">Your Posts</a>
              <a href="/">Profile</a>
              <a href="/">Home</a>
            </div>
          </div>
        </header>
        <body class="App">
          <p>{this.state.apiResponse}</p>
        </body>
      </div>
    );
  }
  
}

export default App;
