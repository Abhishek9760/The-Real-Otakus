import React from 'react';
import AnimeVideoPlayer from '../components/VideoPlayer/AnimeVideoPlayer';

function VideoPlayerScreen({route}) {
  const {url} = route.params;
  return <AnimeVideoPlayer url={url} />;
}

export default VideoPlayerScreen;
