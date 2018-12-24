import React, { Component } from 'react';
import VinylsList from '../components/VinylsList';

class VinylsPage extends Component {
  state = {
    vinyls: [],
    isFetching: true
  }

  componentDidMount() {
    fetch('api/vinyls')
      .then(response => response.json())
      .then(data => {
        this.setState({
          vinyls: data,
          isFetching: false
        });
      })
  }

  render() {
    const { vinyls, isFetching } = this.state;

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

export default VinylsPage;
