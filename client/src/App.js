import React from 'react';
import './App.css';

// Additional views
import Navigation from './views/navigation.js';
import Main from './views/main.js';

class App extends React.Component {

  render() {
    return (
      <div>
        <Navigation />
        <Main />
      </div>
    );
  }
}

export default App;
