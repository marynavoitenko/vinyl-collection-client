import React from 'react';
import PropTypes from 'prop-types';

const Artist = ({ artist }) => {
  const { name } = artist;

  return (
    <div className='artist'>
      {name}
    </div>
  );
}

Artist.propTypes = {
  artist: PropTypes.object
}

export default Artist;
