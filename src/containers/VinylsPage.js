import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVinyls } from '../actions/vinyls';
import VinylsList from '../components/VinylsList';

class VinylsPage extends Component {
  componentDidMount() {
    this.props.fetchVinyls();
  }

  render() {
    const { vinyls, isFetching } = this.props;

    return (
      <div className='vinyls-page'>
        {isFetching ?
          'Loading...'
          : <VinylsList vinyls={vinyls} />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  vinyls: state.vinyls.vinyls,
  isFetching: state.vinyls.isFetching
});

const mapDispatchToProps = dispatch => ({
  fetchVinyls: () => dispatch(fetchVinyls())
});

export default connect(mapStateToProps, mapDispatchToProps)(VinylsPage);
