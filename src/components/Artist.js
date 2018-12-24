import React from 'react';

const Artist = ({ artist }) => {
  const { name } = artist;

  return (
    <div className='artist'>
      {name}
    </div>
  );
}

export default Artist;
