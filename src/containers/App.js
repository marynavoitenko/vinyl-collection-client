import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import VinylsCollectionPage from './VinylsCollectionPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={VinylsCollectionPage} />
      </Router>
    );
  }
}

export default App;
