import {APP_UPDATED, HIDE_BANNER, SET_APP_INFO} from '../constants';

const initialState = {
  isUpdated: true,
  message: '',
  show: false,
};

export const appInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_APP_INFO:
      return {...state, ...action.payload};
    case APP_UPDATED:
      return {...state, isUpdated: action.payload};
    case HIDE_BANNER:
      return {...state, show: 0};
    default:
      return state;
  }
};
