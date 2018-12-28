const LOADING_VINYLS = 'LOADING_VINYLS';
const FETCH_VINYLS = 'FETCH_VINYLS';

export function fetchVinyls() {
    return (dispatch) => {
        dispatch({ type: LOADING_VINYLS });
        return fetch('api/vinyls')
            .then(response => response.json())
            .then(responseJSON => {
                console.log("Fetched vinyls: ", responseJSON);
                dispatch({ type: FETCH_VINYLS, payload: responseJSON });
            });
    };
};
