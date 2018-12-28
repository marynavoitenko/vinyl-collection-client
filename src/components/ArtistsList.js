import React from 'react';
import Artist from './Artist';
import PropTypes from 'prop-types';

const ArtistsList = ({ artists }) => {
  const renderArtists = artists.map((artist) =>
    <Artist key={artist.id} artist={artist} />
  );

  return (
    <div className='artists-list'>
      {renderArtists}
    </div>
  );
}

ArtistsList.propTypes = {
  artists: PropTypes.array
}

export default ArtistsList;
