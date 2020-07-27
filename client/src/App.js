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
  <BrowserRouter path={process.env.PUBLIC_URL}>
    <Switch>
      {/* Below line only for local development environment. */}
      <Route exact path='/'><Redirect to='my-app/home' /></Route>
      {/* <Route exact path='/my-app'><Redirect to='/my-app/home' /></Route> */}
      <Route exact path='/my-app/home' component={Home} />
      <Route exact path='/my-app/your-posts' component={YourPosts} />
      <Route exact path='/my-app/profile' component={Profile} />
    </Switch>
  </BrowserRouter>
);
