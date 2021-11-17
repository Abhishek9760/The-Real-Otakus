import {
  BASE_URL,
  GET_PLAYER_URLS,
  SET_PLAYER_ERROR,
  SET_PLAYER_LOADING,
} from '../constants';

export const getPlayerUrls = epLink => async dispatch => {
  dispatch({type: SET_PLAYER_LOADING, payload: true});
  fetch(`${BASE_URL}/episode?episode_link=${epLink}`)
    .then(res => res.json())
    .then(data => {
      dispatch({type: GET_PLAYER_URLS, payload: data});
      dispatch({type: SET_PLAYER_LOADING, payload: false});
      dispatch({type: SET_PLAYER_ERROR, payload: ''});
    })
    .catch(err => {
      dispatch({type: SET_PLAYER_ERROR, payload: err.message});
      dispatch({type: SET_PLAYER_LOADING, payload: false});
    });
};
