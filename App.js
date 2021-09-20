import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
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
import analytics from '@react-native-firebase/analytics';

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
    // console.log(analytics().getAppInstanceId());
  }, []);
  return (
    <AnimeListContextProvider>
      <SearchContextProvider>
        <SelectedAnimeContextProvider>
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
        </SelectedAnimeContextProvider>
      </SearchContextProvider>
    </AnimeListContextProvider>
  );
};

export default App;
