import React, {useEffect} from 'react';
import {Alert, BackHandler, Linking} from 'react-native';
import {AnimeDetailContextProvider} from './src/context/AnimeDetailContext';
import {AnimeListContextProvider} from './src/context/AnimeListContext';
import {PlayerContextProvider} from './src/context/PlayerContext';
import Orientation from 'react-native-orientation';
import {SearchContextProvider} from './src/context/SearchContext';
import {SelectedAnimeContextProvider} from './src/context/SelectedAnimeContext';
import SplashScreen from 'react-native-splash-screen';
import {FavouritesContextProvider} from './src/context/FavouritesContext';
import {PopularAnimeContextProvider} from './src/context/PopularAnimeContext';
import {GenreContextProvider} from './src/context/GenreContext';
import {
  getAppInfo,
  getBannerShow,
  getData,
  storeAppInfo,
  storeBannerShow,
} from './src/utils';
import VersionInfo from 'react-native-version-info';
import lodash from 'lodash';
import {ThemeContextProvider} from './src/context/ThemeContext';
import Index from './src/Index';

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
  return (
    <ThemeContextProvider>
      <PopularAnimeContextProvider>
        <AnimeListContextProvider>
          <SearchContextProvider>
            <GenreContextProvider>
              <SelectedAnimeContextProvider>
                <FavouritesContextProvider>
                  <AnimeDetailContextProvider>
                    <PlayerContextProvider>
                      <Index />
                    </PlayerContextProvider>
                  </AnimeDetailContextProvider>
                </FavouritesContextProvider>
              </SelectedAnimeContextProvider>
            </GenreContextProvider>
          </SearchContextProvider>
        </AnimeListContextProvider>
      </PopularAnimeContextProvider>
    </ThemeContextProvider>
  );
};

export default App;
