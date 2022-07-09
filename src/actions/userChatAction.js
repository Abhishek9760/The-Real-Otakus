import {CHANGE_PROFILE_PIC, CHANGE_USER_NAME} from '../constants';

export const changeUsername = name => async dispatch => {
  dispatch({type: CHANGE_USER_NAME, payload: name});
};
export const changeProfilePic = uri => async dispatch => {
  dispatch({type: CHANGE_PROFILE_PIC, payload: uri});
};
