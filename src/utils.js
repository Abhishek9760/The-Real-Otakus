import {ToastAndroid} from 'react-native';

export const showToast = msg => {
  ToastAndroid.show(msg, ToastAndroid.SHORT);
};
export const inRange = (obj, value) => {
  for (let item of obj) {
    let epNo = Object.keys(item)[0];
    if (epNo === value) {
      return true;
    }
  }
  return false;
};

export const findLink = (obj, epNum) => {
  for (let item of obj) {
    let epNo = Object.keys(item)[0];
    if (epNo === epNum) {
      return item[epNum];
    }
  }
};
