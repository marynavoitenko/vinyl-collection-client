import React, { Component } from 'react';
import { connect } from 'react-redux';
import Vinyl from '../components/Vinyl';

class VinylShow extends Component {
  render() {
    return (
      <div>
        <Vinyl vinyl={this.props.vinyl} />
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  const vinyl = state.vinyls.vinyls.find(vinyl => vinyl.id === parseInt(ownProps.match.params.vinylId, 10))

  if (vinyl) {
    return { vinyl }
  } else {
    return { vinyl: {} }
  }
}


export default connect(mapStateToProps)(VinylShow);
