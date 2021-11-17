import {
  POPULAR_ANIME_LIST,
  POPULAR_ANIME_LIST_LOADING,
  POPULAR_ANIME_LIST_ERROR,
  RESET,
  NEXT_PAGE,
  RESET_PAGE,
} from '../constants';

const initialState = {
  popularAnimeList: [],
  loading: false,
  error: '',
  currentPage: 1,
};

export const animeListReducer = (state = initialState, action) => {
  switch (action.type) {
    case POPULAR_ANIME_LIST:
      return {
        ...state,
        popularAnimeList: [...state.popularAnimeList, ...action.payload],
      };
    case POPULAR_ANIME_LIST_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case POPULAR_ANIME_LIST_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case NEXT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    case RESET_PAGE:
      return {
        ...state,
        currentPage: 1,
      };
    case RESET:
      return {
        ...state,
        popularAnimeList: [],
      };
    default:
      return state;
  }
};
