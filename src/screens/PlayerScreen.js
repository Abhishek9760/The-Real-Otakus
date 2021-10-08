import React, {useEffect, useContext} from 'react';
import {PlayerContext} from '../context/PlayerContext';
import Loader from '../components/utils/Loader';
import VideoQuality from '../components/VideoPlayer/VideoQuality';
import TryAgain from '../components/utils/TryAgain';
import styled from 'styled-components/native';

function PlayerScreen({route}) {
  const {link} = route.params;
  const {getVidDownloadLinks, reset, vidUrlsLoading, error} =
    useContext(PlayerContext);

  useEffect(() => {
    if (link) {
      getVidDownloadLinks(link);
    }
    () => reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [link]);

  return (
    <Container>
      {vidUrlsLoading ? (
        <Loader />
      ) : error.length !== 0 ? (
        <TryAgain
          reload={() => getVidDownloadLinks(link)}
          loading={vidUrlsLoading}
        />
      ) : (
        <VideoQuality />
      )}
    </Container>
  );
}

export default PlayerScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
`;
