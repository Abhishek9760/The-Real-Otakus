import {CLEAR_SELECTED_ANIME, SET_SELECTED_ANIME} from '../constants';

export const setSelectedAnime = anime => async dispatch => {
  return dispatch({type: SET_SELECTED_ANIME, payload: anime});
};

export const clearSelectedAnime = () => async dispatch => {
  return dispatch({type: CLEAR_SELECTED_ANIME});
};
