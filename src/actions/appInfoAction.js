import {HIDE_BANNER, SET_APP_INFO} from '../constants';
import VersionInfo from 'react-native-version-info';

export const getAndSetAppInfo = () => (dispatch, getState) => {
  fetch('https://reactnative-63aa1-default-rtdb.firebaseio.com/data.json')
    .then(res => res.json())
    .then(data => {
      const appInfo = getState().appInfo;
      if (
        appInfo.message.length <= 0 ||
        appInfo.message !== data.message ||
        VersionInfo.appVersion !== data.version
      ) {
        let isUpdated = !(VersionInfo.appVersion < data.version);
        dispatch({
          type: SET_APP_INFO,
          payload: {...data, isUpdated: isUpdated},
        });
      }
    })
    .catch(err => {
      console.log(err);
    });
};

export const hideBanner = () => dispatch => {
  dispatch({type: HIDE_BANNER});
};
