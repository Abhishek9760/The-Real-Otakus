import React from 'react';
import AnimeVideoPlayer from '../components/VideoPlayer/AnimeVideoPlayer';
import {StatusBar} from 'react-native';

function VideoPlayerScreen({route}) {
  const {url} = route.params;
  return (
    <>
      <StatusBar hidden />
      <AnimeVideoPlayer url={url} />
    </>
  );
}

export default VideoPlayerScreen;
