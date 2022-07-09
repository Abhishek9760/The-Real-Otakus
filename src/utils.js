import {Alert, BackHandler, Linking, ToastAndroid} from 'react-native';

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

export const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
};

export const updateNeeded = () => {
  return Alert.alert(
    'New Update Available 🎉',
    'To continue enjoy free animes, Please update your app.',
    [
      {
        text: 'Update',
        onPress: () => {
          Linking.openURL('https://therealotakus.live');
          BackHandler.exitApp();
        },
        style: 'default',
      },
    ],
  );
};
