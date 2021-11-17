import {
  GET_ANIME_GENRE_LIST,
  BASE_URL,
  SET_ANIME_GENRE_LOADING,
  SET_ANIME_GENRE_ERROR,
  GET_GENRE_ANIME_LIST,
  SET_GENRE_ANIME_LOADING,
  GENRE_ANIME_RESET_PAGE,
  GENRE_ANIME_NEXT_PAGE,
  GENRE_ANIME_RESET,
  SET_GENRE_ANIME_ERROR,
  GENRE_ANIME_CLEAR,
} from '../constants';
import {showToast} from '../utils';

export const getAnimeGenre = () => async dispatch => {
  dispatch(setGenreLoading(true));
  fetch(`${BASE_URL}/genre`)
    .then(res => res.json())
    .then(data => {
      dispatch({type: SET_ANIME_GENRE_ERROR, payload: ''});
      dispatch({
        type: GET_ANIME_GENRE_LIST,
        payload: data,
      });
      dispatch(setGenreLoading(false));
    })
    .catch(err => {
      dispatch({type: SET_ANIME_GENRE_ERROR, payload: err.message});
      dispatch(setGenreLoading(false));
    });
};

export const setGenreLoading = val => async dispatch =>
  dispatch({type: SET_ANIME_GENRE_LOADING, payload: val});

export const animeGenreListAction = (genre, page) => async dispatch => {
  dispatch({type: SET_GENRE_ANIME_LOADING, payload: true});
  fetch(`${BASE_URL}/genre/${genre}?page=${page}`)
    .then(res => res.json())
    .then(data => {
      dispatch({type: GET_GENRE_ANIME_LIST, payload: data});
      dispatch({type: SET_GENRE_ANIME_ERROR, payload: ''});
      dispatch({type: SET_GENRE_ANIME_LOADING, payload: false});
    })
    .catch(err => {
      dispatch({type: SET_GENRE_ANIME_LOADING, payload: false});
      dispatch({type: GENRE_ANIME_RESET_PAGE});
      dispatch({type: GENRE_ANIME_RESET});
      dispatch({type: SET_GENRE_ANIME_ERROR, payload: err.message});
      showToast('Something went wrong');
    });
};

export const clearGenreAnimeList = () => dispatch =>
  dispatch({type: GENRE_ANIME_CLEAR});

export const getNextPage = () => async dispatch =>
  dispatch({type: GENRE_ANIME_NEXT_PAGE});
