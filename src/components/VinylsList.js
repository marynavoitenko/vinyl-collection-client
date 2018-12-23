import React from 'react';
import Vinyl from './Vinyl';

const VinylsList = ({ vinyls }) => {
  const renderVinyls = vinyls.map((vinyl) =>
    <Vinyl vinyl={vinyl} />
  );

  return (
    <div className='vinyls-list'>
      {renderVinyls}
    </div>
  );
}

export default VinylsList;
