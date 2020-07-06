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

  navSlide() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
      nav.classListtoggle('.nav-active')
    });
  }

  // https://youtu.be/gXkqy0b4M5g?t=1202 Help here. Figure out function calls in React.
  render() {
    return (
      <div>
        <header>
          <nav>
            <h4>Saahil's Blog</h4>
            <ul class="nav-links">
                <li><a href="/">Your Posts</a></li>
                <li><a href="/">Profile</a></li>
                <li><a href="/">Home</a></li>
            </ul>
            <div class="burger">
              <div class="line1"></div>
              <div class="line2"></div>
              <div class="line3"></div>
            </div>
          </nav>
          {this.navSlide}
        </header>
        <body class="App">
          <p>{this.state.apiResponse}</p>
        </body>
      </div>
    );
  }
  
}

export default App;
