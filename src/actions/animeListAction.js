import {
  POPULAR_ANIME_LIST,
  POPULAR_ANIME_LIST_ERROR,
  POPULAR_ANIME_LIST_LOADING,
  RESET,
  BASE_URL,
  NEXT_PAGE,
  RESET_PAGE,
} from '../constants';
import {showToast} from '../utils';

export const getPopularAnimeList =
  (page = 1) =>
  async (dispatch, state) => {
    dispatch({type: POPULAR_ANIME_LIST_LOADING, payload: true});

    fetch(`${BASE_URL}/popular?page=${state().anime.currentPage}`)
      .then(res => res.json())
      .then(data => {
        dispatch({type: POPULAR_ANIME_LIST_ERROR, payload: ''});
        dispatch({
          type: POPULAR_ANIME_LIST,
          payload: data,
        });
        dispatch({type: POPULAR_ANIME_LIST_LOADING, payload: false});
      })
      .catch(err => {
        console.log(err.message);
        dispatch({type: POPULAR_ANIME_LIST_ERROR, payload: err.message});
        dispatch({type: POPULAR_ANIME_LIST_LOADING, payload: false});
        dispatch({type: RESET_PAGE});
        dispatch({type: RESET});
        showToast('Something went wrong.');
      });
  };

export const getNextPage = () => async dispatch => dispatch({type: NEXT_PAGE});
