import {
  BASE_URL,
  CLEAR_ANIME_DETAILS,
  GET_ANIME_DETAILS,
  SET_ANIME_DETAILS_ERROR,
  SET_ANIME_DETAILS_LOADING,
} from '../constants';
import {showToast} from '../utils';

export const getAnimeInfo = source => async dispatch => {
  dispatch(setAnimeDetailsLoading(true));
  fetch(`${BASE_URL}/anime?source=${source}`)
    .then(res => res.json())
    .then(data => {
      dispatch({type: SET_ANIME_DETAILS_ERROR, payload: ''});
      dispatch({type: GET_ANIME_DETAILS, payload: data});
      dispatch(setAnimeDetailsLoading(false));
    })
    .catch(err => {
      console.log('error');
      showToast('Something went wrong');
      dispatch(clearAnimeInfo());
      dispatch(setAnimeDetailsLoading(false));
      dispatch({type: SET_ANIME_DETAILS_ERROR, payload: err.message});
    });
};

export const setAnimeDetailsLoading = val => async dispatch =>
  dispatch({type: SET_ANIME_DETAILS_LOADING, payload: val});

export const clearAnimeInfo = () => async dispatch => {
  return dispatch({type: CLEAR_ANIME_DETAILS});
};
