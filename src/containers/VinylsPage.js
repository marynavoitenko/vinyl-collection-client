import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import { fetchVinyls } from '../actions/vinyls';
import VinylsList from '../components/VinylsList';
import VinylShow from './VinylShow';

class VinylsPage extends Component {
  componentDidMount() {
    this.props.fetchVinyls();
  }

  render() {
    const { vinyls, match } = this.props;

    return (
      <div className='vinyls-page'>
        <Switch>
          <Route path={`${match.url}/:vinylId`} component={VinylShow}/>
          <Route exact path={match.url} render={() => <VinylsList vinyls={vinyls} />} />
        </Switch>
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
