import React, {useEffect, useRef} from 'react';
import {Colors} from 'react-native-paper';
import VideoPlayer from 'react-native-video-controls';
import {useNavigation} from '@react-navigation/native';
import {
  hideNavigationBar,
  showNavigationBar,
} from 'react-native-navigation-bar-color';
import Orientation from 'react-native-orientation';
import {StatusBar, AppState} from 'react-native';

function AnimeVideoPlayer({url, navigator}) {
  const navigation = useNavigation();
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    Orientation.unlockAllOrientations();
    hideNavigationBar();

    return () => {
      Orientation.lockToPortrait();
    };
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        hideNavigationBar();
      }

      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
      showNavigationBar();
    };
  }, []);

  return (
    <>
      <StatusBar hidden />
      <VideoPlayer
        source={{
          uri: url,
          headers: {Referer: 'https://streamani.net/'},
        }}
        paused
        seekColor={Colors.purpleA700}
        disableVolume
        onBack={() => navigation.navigate('Home')}
      />
    </>
  );
}

export default AnimeVideoPlayer;
