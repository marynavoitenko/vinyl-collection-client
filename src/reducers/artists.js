const initialState = {
  isFetching: false,
  artists: []
};

export default (state = initialState, action) => {
    switch (action.type) {

      case 'LOADING_ARTISTS':
        return {
          ...state,
          isFetching: true
        }

      case 'FETCH_ARTISTS':
        return {
          artists: action.payload,
          isFetching: false
        }

      default:
        return state;
    }
  };
