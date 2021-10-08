import {ToastAndroid} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

export const getAppInfo = () => {
  return fetch('https://therealotakus.azurewebsites.net/app/info')
    .then(res => res.json())
    .then(data => {
      return data;
    })
    .catch(err => {
      showToast(err.message);
      console.log(err);
    });
};

export const storeAppInfo = (apiData = null) => {
  if (apiData) {
    storeData(apiData);
  } else {
    getAppInfo().then(data => {
      if (data) {
        storeData(data);
      }
    });
  }
};

export const storeData = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@app_data', jsonValue);
  } catch (e) {
    // saving error
    console.log(e);
  }
};

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@app_data');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

export const storeBannerShow = async value => {
  try {
    await AsyncStorage.setItem('@banner_show', value);
  } catch (e) {
    // saving error
    console.log(e);
  }
};

export const getBannerShow = async () => {
  try {
    const value = await AsyncStorage.getItem('@banner_show');
    return value;
  } catch (e) {
    // error reading value
    console.log(e);
  }
};
