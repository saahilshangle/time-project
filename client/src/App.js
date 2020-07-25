import React from 'react';
//import logo from './logo.svg';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { apiResponse: "First", mongoResponse: "Second" };
  }

  // eslint-disable-next-line
  callAPI() {
    fetch("http://localhost:5000/express_backend")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  }

  callDatabase() {
    fetch("http://localhost:5000/mongo_backend")
        .then(res => res.text())
        .then(res =>this.setState({ mongoResponse: res}));
  }

  componentWillMount() {
    this.callAPI();
    this.callDatabase();
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

  render() {
    return (
      <div>
        <header>
          <nav>
            <h4>TIM: Time is Money</h4>
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
        <body class="row">
          <div class="column left">
          </div>
          <div class="column middle">
            <p>{this.state.apiResponse}</p>
            <p>{this.state.mongoResponse}</p>
            <p>Sell your time! College application review, tutoring, lessons, consultations, and more!</p>
          </div>
          <div class="column right">
          </div>
        </body>
      </div>
    );
  }
  
}

export default App;
