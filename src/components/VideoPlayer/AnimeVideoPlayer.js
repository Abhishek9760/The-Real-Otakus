import React, {useEffect, useContext} from 'react';
import {Colors} from 'react-native-paper';
import VideoPlayer from './VideoPlayer';
import Orientation from 'react-native-orientation';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native';
import {PlayerContext} from '../../context/PlayerContext';

function AnimeVideoPlayer({url}) {
  const {paused, setPlayerVisible} = useContext(PlayerContext);

  useEffect(() => {
    Orientation.unlockAllOrientations();
    return () => {
      Orientation.lockToPortrait();
    };
  }, []);

  return (
    <Container>
      <StatusBar hidden />
      <VideoPlayer
        source={{
          uri: url,
          headers: {Referer: 'https://goload.one/'},
        }}
        paused={paused}
        seekColor={Colors.purpleA700}
        disableVolume
        onBack={() => setPlayerVisible(false)}
        tapAnywhereToPause
        fullscreen
        controlTimeout={3000}
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
