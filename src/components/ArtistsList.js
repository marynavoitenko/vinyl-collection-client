import React from 'react';
import Artist from './Artist';

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

export default ArtistsList;
