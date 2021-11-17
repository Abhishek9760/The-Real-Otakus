import {
  GET_PLAYER_URLS,
  SET_PLAYER_ERROR,
  SET_PLAYER_LOADING,
} from '../constants';

const initialState = {
  vidUrls: [],
  loading: true,
  error: '',
};

export const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PLAYER_URLS:
      return {
        ...state,
        vidUrls: action.payload,
      };
    case SET_PLAYER_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_PLAYER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
