import {
  CLEAR_ANIME_DETAILS,
  GET_ANIME_DETAILS,
  SET_ANIME_DETAILS_ERROR,
  SET_ANIME_DETAILS_LOADING,
} from '../constants';
const initialState = {
  total_episodes: 0,
  anime_info: {},
  episodes: [],
  loading: true,
  error: '',
};

export const animeDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ANIME_DETAILS:
      return {
        ...state,
        ...action.payload,
      };
    case SET_ANIME_DETAILS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_ANIME_DETAILS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_ANIME_DETAILS:
      return {
        ...state,
        total_episodes: 0,
        episodes: [],
        anime_info: {},
      };
    default:
      return state;
  }
};
