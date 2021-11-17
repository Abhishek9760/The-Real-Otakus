import React, {useEffect} from 'react';
import {Alert, BackHandler, Linking} from 'react-native';
import Orientation from 'react-native-orientation';
import SplashScreen from 'react-native-splash-screen';
import {PersistGate} from 'redux-persist/integration/react';
import {
  getAppInfo,
  getBannerShow,
  getData,
  storeAppInfo,
  storeBannerShow,
} from './src/utils';
import VersionInfo from 'react-native-version-info';
import lodash from 'lodash';
import Index from './src/Index';
import {Provider} from 'react-redux';
import configureStore from './src/store/configureStore';
import Loader from './src/components/utils/Loader';

const updateNeeded = () => {
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

const {store, persistor} = configureStore();

const App = () => {
  useEffect(() => {
    Orientation.lockToPortrait();
    SplashScreen.hide();
    getData().then(data => {
      if (data) {
        getBannerShow().then(val => {
          if (val !== 'false' && data.show_message) {
            storeBannerShow('true');
          }
        });
        getAppInfo().then(apiData => {
          if (!lodash.isEqual(apiData, data)) {
            storeBannerShow('true');
            storeAppInfo(apiData);
          }
        });
        if (VersionInfo.appVersion < data.version) {
          updateNeeded();
        }
      } else {
        storeAppInfo();
      }
    });
  }, []);

  // useEffect(() => {
  //   admob()
  //     .setRequestConfiguration({
  //       // Update all future requests suitable for parental guidance
  //       maxAdContentRating: MaxAdContentRating.PG,

  //       // Indicates that you want your content treated as child-directed for purposes of COPPA.
  //       tagForChildDirectedTreatment: true,

  //       // Indicates that you want the ad request to be handled in a
  //       // manner suitable for users under the age of consent.
  //       tagForUnderAgeOfConsent: true,
  //     })
  //     .then(() => {
  //       // Request config successfully set!
  //     });
  // }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <Index />
      </PersistGate>
    </Provider>
  );
};

export default App;
