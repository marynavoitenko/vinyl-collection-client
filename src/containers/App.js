import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import VinylsPage from './VinylsPage';
import ArtistsPage from './ArtistsPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <NavBar />
          <Route exact path='/' component={VinylsPage} />
          <Route path='/vinyls' component={VinylsPage} />
          <Route path='/artists' component={ArtistsPage} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
