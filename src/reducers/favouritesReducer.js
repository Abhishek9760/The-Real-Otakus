import {ADD_FAVOURITES, REMOVE_FAVOURITES} from '../constants';

const initialState = {
  favourites: {},
};

export const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVOURITES:
      let item = action.payload;
      let newState = {...state.favourites};
      newState[item.name] = item;
      return {
        ...state,
        favourites: newState,
      };
    case REMOVE_FAVOURITES:
      let name = action.payload;
      let newFavs = {...state.favourites};
      delete newFavs[name];
      return {
        ...state,
        favourites: newFavs,
      };
    default:
      return state;
  }
};
