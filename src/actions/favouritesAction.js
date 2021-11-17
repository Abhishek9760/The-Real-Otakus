import {ADD_FAVOURITES, REMOVE_FAVOURITES} from '../constants';

export const addToFavourites = anime => async dispatch => {
  dispatch({type: ADD_FAVOURITES, payload: anime});
};

export const removeFromFavourites = name => async dispatch => {
  console.log(name);
  dispatch({type: REMOVE_FAVOURITES, payload: name});
};
