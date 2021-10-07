import React, {useEffect} from 'react';
import {StatusBar, Alert, BackHandler, Linking} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AnimeDetailContextProvider} from './src/context/AnimeDetailContext';
import {AnimeListContextProvider} from './src/context/AnimeListContext';
import {PlayerContextProvider} from './src/context/PlayerContext';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import Orientation from 'react-native-orientation';
import {DrawerNavigator} from './src/navigation/DrawerNavigator';
import {SearchContextProvider} from './src/context/SearchContext';
import {SelectedAnimeContextProvider} from './src/context/SelectedAnimeContext';
import SplashScreen from 'react-native-splash-screen';
import {FavouritesContextProvider} from './src/context/FavouritesContext';
import {PopularAnimeContextProvider} from './src/context/PopularAnimeContext';
import {GenreContextProvider} from './src/context/GenreContext';
import {getAppInfo, getBannerShow, getData, storeAppInfo, storeBannerShow} from './src/utils';
import VersionInfo from 'react-native-version-info';
import lodash from 'lodash';

const updateNeeded = () => {
  return Alert.alert(
    'New Update Available',
    'To continue enjoy free animes, Please update your app.',
    [
      {
        text: 'Update',
        onPress: () => {
          BackHandler.exitApp();
          Linking.openURL('https://therealotakus.live');
        },
        style: 'default',
      },
    ],
  );
};

const App = () => {
  useEffect(() => {
    const changeColor = async () => {
      try {
        await changeNavigationBarColor('#ffffff');
      } catch (err) {
        console.log(err);
      }
    };
    changeColor();
    Orientation.lockToPortrait();
    SplashScreen.hide();
    getData().then(data => {
      if (data) {
        getBannerShow().then(val => {
          if(val !== 'false' && data.show_message) {
            storeBannerShow('true')
          }
        })
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
    // analytics().setUserId(getUniqueId());
  }, []);

  return (
    <PopularAnimeContextProvider>
      <AnimeListContextProvider>
        <SearchContextProvider>
          <GenreContextProvider>
            <SelectedAnimeContextProvider>
              <FavouritesContextProvider>
                <AnimeDetailContextProvider>
                  <PlayerContextProvider>
                    <NavigationContainer>
                      <StatusBar
                        animated={true}
                        backgroundColor="#512da8"
                        barStyle="light-content"
                        translucent
                      />
                      <DrawerNavigator />
                    </NavigationContainer>
                  </PlayerContextProvider>
                </AnimeDetailContextProvider>
              </FavouritesContextProvider>
            </SelectedAnimeContextProvider>
          </GenreContextProvider>
        </SearchContextProvider>
      </AnimeListContextProvider>
    </PopularAnimeContextProvider>
  );
};

export default App;
