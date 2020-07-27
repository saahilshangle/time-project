import React from 'react';
import './App.css';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';

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
  <BrowserRouter basename={process.env.BASE_PATH}>
    <Switch>
      {/* Below line only for local development environment. */}
      <Route exact path='/'><Redirect to='home' /></Route>
      {/* <Route exact path='/my-app'><Redirect to='/my-app/home' /></Route> */}
      <Route exact path='/home' component={Home} />
      <Route exact path='/your-posts' component={YourPosts} />
      <Route exact path='/profile' component={Profile} />
    </Switch>
  </BrowserRouter>
);
