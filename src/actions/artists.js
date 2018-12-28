const LOADING_ARTISTS = 'LOADING_ARTISTS';
const FETCH_ARTISTS = 'FETCH_ARTISTS';

export function fetchArtists() {
    return (dispatch) => {
        dispatch({ type: LOADING_ARTISTS });
        return fetch('api/artists')
            .then(response => response.json())
            .then(responseJSON => {
                console.log("Fetched artists: ", responseJSON);
                dispatch({ type: FETCH_ARTISTS, payload: responseJSON });
            });
    };
};
