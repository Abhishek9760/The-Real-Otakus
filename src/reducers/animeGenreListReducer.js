import {
  GENRE_ANIME_NEXT_PAGE,
  GENRE_ANIME_RESET,
  GENRE_ANIME_RESET_PAGE,
  GET_GENRE_ANIME_LIST,
  SET_GENRE_ANIME_ERROR,
  SET_GENRE_ANIME_LOADING,
  GENRE_ANIME_CLEAR,
} from '../constants';

const initialState = {
  animeList: [],
  loading: true,
  error: '',
  currentPage: 1,
};

export const animeGenreListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GENRE_ANIME_LIST:
      return {
        ...state,
        animeList: [...state.animeList, ...action.payload],
      };
    case SET_GENRE_ANIME_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_GENRE_ANIME_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case GENRE_ANIME_NEXT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    case GENRE_ANIME_RESET_PAGE:
      return {
        ...state,
        currentPage: 1,
      };
    case GENRE_ANIME_RESET:
      return {
        ...state,
        animeList: [],
      };
    case GENRE_ANIME_CLEAR:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
