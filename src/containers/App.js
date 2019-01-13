import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import VinylsPage from './VinylsPage';
import ArtistsPage from './ArtistsPage';
import Home from '../components/Home';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <div className='container'>
            <NavBar />
            <Route exact path='/' component={Home} />
            <Route path='/vinyls' component={VinylsPage} />
            <Route path='/artists' component={ArtistsPage} />
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default App;
