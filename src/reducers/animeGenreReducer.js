import {
  GET_ANIME_GENRE_LIST,
  SET_ANIME_GENRE_ERROR,
  SET_ANIME_GENRE_LOADING,
} from '../constants';

const initialState = {
  genreList: [],
  loading: false,
  error: '',
};

export const animeGenreReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ANIME_GENRE_LIST:
      return {
        ...state,
        genreList: action.payload,
      };
    case SET_ANIME_GENRE_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_ANIME_GENRE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
