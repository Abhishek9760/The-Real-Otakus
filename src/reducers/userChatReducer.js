import {getUniqueId} from 'react-native-device-info';
import {CHANGE_PROFILE_PIC, CHANGE_USER_NAME} from '../constants';
import {getRandomIntInclusive} from '../utils';

const initialState = {
  username: getUniqueId(),
  profilePic: `https://randomuser.me/api/portraits/thumb/women/${getRandomIntInclusive(
    0,
    99,
  )}.jpg`,
};

export const userChatReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USER_NAME:
      return {
        ...state,
        username: action.payload,
      };
    case CHANGE_PROFILE_PIC:
      return {
        ...state,
        profilePic: action.payload,
      };
    default:
      return state;
  }
};
