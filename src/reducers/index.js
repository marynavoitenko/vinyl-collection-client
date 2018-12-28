import { combineReducers } from 'redux';
import vinyls from './vinyls';
import artists from './artists';

export default combineReducers({
  artists,
  vinyls
});
