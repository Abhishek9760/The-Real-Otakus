import {
  BASE_URL,
  GET_SEARCH,
  SET_SEARCH_ERROR,
  SET_SEARCH_LOADING,
  SET_SEARCH_QUERY,
} from '../constants';

export const getSearch = query => async dispatch => {
  dispatch({type: SET_SEARCH_LOADING, payload: true});
  fetch(`${BASE_URL}/search/${query}`)
    .then(res => res.json())
    .then(data => {
      dispatch({type: GET_SEARCH, payload: data});
      dispatch({type: SET_SEARCH_LOADING, payload: false});
      dispatch({type: SET_SEARCH_ERROR, payload: ''});
    })
    .catch(err => {
      dispatch({type: SET_SEARCH_ERROR, payload: err.message});
      dispatch({type: SET_SEARCH_LOADING, payload: false});
    });
};

export const setQuery = query => async dispatch =>
  dispatch({type: SET_SEARCH_QUERY, payload: query});
