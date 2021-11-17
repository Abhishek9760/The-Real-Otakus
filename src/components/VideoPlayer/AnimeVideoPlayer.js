import React from 'react';
import {Colors} from 'react-native-paper';
import VideoPlayer from './VideoPlayer';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native';

function AnimeVideoPlayer({url, setPlayerVisible}) {
  return (
    <Container>
      <StatusBar hidden />
      <VideoPlayer
        source={{
          uri: url,
          headers: {Referer: 'https://goload.one/'},
        }}
        seekColor={Colors.purpleA700}
        disableVolume
        onBack={() => setPlayerVisible(false)}
        tapAnywhereToPause
        fullscreen
        controlTimeout={5000}
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
