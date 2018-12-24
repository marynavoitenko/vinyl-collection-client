import React, { Component } from 'react';
import ArtistsList from '../components/ArtistsList';

class ArtistsPage extends Component {
  state = {
    artists: [],
    isFetching: true
  }

  componentDidMount() {
    fetch('api/artists')
      .then(response => response.json())
      .then(data => {
        this.setState({
          artists: data,
          isFetching: false
        });
      })
  }

  render() {
    const { artists, isFetching } = this.state;

    return (
      <div className='artists-page'>
        {isFetching ?
          'Loading...'
          : <ArtistsList artists={artists} />
        }
      </div>
    );
  }
}

export default ArtistsPage;
