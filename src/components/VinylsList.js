import React from 'react';
import Vinyl from './Vinyl';
import PropTypes from 'prop-types';

const VinylsList = ({ vinyls }) => {
  const renderVinyls = vinyls.map((vinyl) =>
    <Vinyl key={vinyl.id} vinyl={vinyl} />
  );

  return (
    <div className='vinyls-list'>
      {renderVinyls}
    </div>
  );
}

VinylsList.propTypes = {
  vinyls: PropTypes.array
}

export default VinylsList;
