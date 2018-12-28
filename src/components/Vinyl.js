import React from 'react';
import PropTypes from 'prop-types';

const Vinyl = ({ vinyl }) => {
  const { code, title } = vinyl;

  return (
    <div className='vinyl'>
      {code} - {title}
    </div>
  );
}

Vinyl.propTypes = {
  vinyl: PropTypes.object
}

export default Vinyl;
