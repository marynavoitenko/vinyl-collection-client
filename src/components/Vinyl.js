import React from 'react';

const Vinyl = ({ vinyl }) => {
  const { code, title } = vinyl;

  return (
    <div className='vinyl'>
      {code} - {title}
    </div>
  );
}

export default Vinyl;
