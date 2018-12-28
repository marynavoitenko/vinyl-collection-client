const initialState = {
  isFetching: false,
  vinyls: []
};

export default (state = initialState, action) => {
    switch (action.type) {

      case 'LOADING_VINYLS':
        return {
          ...state,
          isFetching: true
        }

      case 'FETCH_VINYLS':
        return {
          vinyls: action.payload,
          isFetching: false
        }

      default:
        return state;
    }
  };
