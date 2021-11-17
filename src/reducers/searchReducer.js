import {
  GET_SEARCH,
  SET_SEARCH_ERROR,
  SET_SEARCH_LOADING,
  SET_SEARCH_QUERY,
} from '../constants';

const initialState = {
  query: '',
  results: [],
  error: '',
  loading: false,
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return {
        ...state,
        query: action.payload,
      };
    case GET_SEARCH:
      return {
        ...state,
        results: action.payload,
      };
    case SET_SEARCH_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SET_SEARCH_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
