import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArtists } from '../actions/artists';
import ArtistsList from '../components/ArtistsList';

class ArtistsPage extends Component {
  componentDidMount() {
    this.props.fetchArtists();
  }

  render() {
    const { artists, isFetching } = this.props;

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

const mapStateToProps = state => ({
  artists: state.artists.artists,
  isFetching: state.artists.isFetching
});

const mapDispatchToProps = dispatch => ({
  fetchArtists: () => dispatch(fetchArtists())
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistsPage);
