import {CLEAR_SELECTED_ANIME, SET_SELECTED_ANIME} from '../constants';

const initialState = {
  name: '',
  source: '',
  image: null,
};

export const selectedAnimeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_ANIME:
      return {
        ...state,
        ...action.payload,
      };
    case CLEAR_SELECTED_ANIME:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
