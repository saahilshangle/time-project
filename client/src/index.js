import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Redirect, BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Additional views
import Navigation from './views/navigation.js';
import Home from './views/home.js';
import Profile from './views/profile.js';
import YourPosts from './views/yourposts.js';

ReactDOM.render(
  <Router>
    <Navigation />
    <Switch>
      <Route exact path='/time-project'><Redirect to='/time-project/home' /></Route>
      <Route exact path='/time-project/home' component={Home} />
      <Route exact path='/time-project/your-posts' component={YourPosts} />
      <Route exact path='/time-project/profile' component={Profile} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
