import React from 'react';

const Vinyl = ({ vinyl }) => {
  const { code, name } = vinyl;

  return (
    <div className='vinyl'>
      {code} - {name}
    </div>
  );
}

export default Vinyl;
