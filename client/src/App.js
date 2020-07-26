import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

// Additional views
import Navigation from './views/navigation.js';
import Home from './views/home.js';
import Profile from './views/profile.js';
import YourPosts from './views/yourposts.js';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <Main />
      </div>
    );
  }
}

const Main = () => (
  <Switch>
    <Route exact path='/my-app'><Redirect to='/my-app/home' /></Route>
    <Route exact path='/my-app/home' component={Home}></Route>
    <Route exact path='/my-app/your-posts' component={YourPosts}></Route>
    <Route exact path='/my-app/profile' component={Profile}></Route>
  </Switch>
);
