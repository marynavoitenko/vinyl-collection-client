import React from 'react';
import Vinyl from './Vinyl';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const VinylsList = ({ vinyls }) => {
  const renderVinyls = vinyls.map((vinyl) =>
    <Link to={`/vinyls/${vinyl.id}`} key={vinyl.id} >
      <Vinyl vinyl={vinyl} />
    </Link>
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
