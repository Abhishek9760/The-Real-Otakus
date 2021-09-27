import React, {useEffect, useRef, useContext} from 'react';
import {Colors} from 'react-native-paper';
import VideoPlayer from './VideoPlayer';
import {useNavigation} from '@react-navigation/native';
import {
  hideNavigationBar,
  showNavigationBar,
} from 'react-native-navigation-bar-color';
import Orientation from 'react-native-orientation';
import {StatusBar, AppState} from 'react-native';
import styled from 'styled-components/native';
import {PlayerContext} from '../../context/PlayerContext';

function AnimeVideoPlayer({url, navigator}) {
  const navigation = useNavigation();
  const appState = useRef(AppState.currentState);
  const {paused} = useContext(PlayerContext);
  const playerRef = useRef();

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
    <Container>
      <StatusBar hidden />
      <VideoPlayer
        source={{
          uri: url,
          headers: {Referer: 'https://streamani.net/'},
        }}
        paused={paused}
        seekColor={Colors.purpleA700}
        disableVolume
        onBack={() => navigation.navigate('Home')}
        ref={playerRef}
        tapAnywhereToPause
      />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default AnimeVideoPlayer;
