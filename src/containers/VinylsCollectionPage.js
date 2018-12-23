import React, { Component } from 'react';

class VinylsCollectionPage extends Component {
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
      <div>{isFetching ? 'Loading...' : vinyls[0].name}</div>
    );
  }
}

export default VinylsCollectionPage;
