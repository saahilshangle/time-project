import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
//import './connection.js';
//import connection from './connection.js';
//const { Connection } = require('./connection.js');
const { MongoClient } = require('mongodb');

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: "No express backend", 
    mongoResponse: "No mongodb to express backend", 
    frontendMongo: "No frontend mongodb call" };
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
    this.main();
    //this.myFunction();
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

  main() {
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb+srv://test-1:testing-only@cluster0-saiku.mongodb.net/sample-airbnb?retryWrites=true&w=majority";
    
    /**
     * The Mongo Client you will use to interact with your database
     * See https://mongodb.github.io/node-mongodb-native/3.3/api/MongoClient.html for more details
     */
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    
    try {
        // Connect to the MongoDB cluster
        client.connect();
        
        // Make the appropriate DB calls
        this.listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
        // Close the connection to the MongoDB cluster
        client.close();

    }
  }

  writeTest() {
    return "anothertesty";
  }

  /**
  * Print the names of all available databases
  * @param {MongoClient} client A MongoClient that is connected to a cluster
  */
  listDatabases(client) {
    const databasesList = client.db().admin().listDatabases();
    this.setState({ frontendMongo: "It works" });
    console.log("Databases:");
    console.log(databasesList.databases);
    //databasesList.databases.forEach(db => console.log(` - ${db.name}`));
  };

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
            <p>{this.state.frontendMongo}</p>
            {/* <p>Sell your time! College application review, tutoring, lessons, consultations, and more!</p> */}
          </div>
          <div class="column right">
          </div>
        </body>
      </div>
    );
  }
  
}

//export default App;
