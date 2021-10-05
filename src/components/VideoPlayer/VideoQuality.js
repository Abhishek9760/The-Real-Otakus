import React, {useContext} from 'react';
import Modal from 'react-native-modal';
import styled from 'styled-components/native';
import {PlayerContext} from '../../context/PlayerContext';
import AnimeVideoPlayer from './AnimeVideoPlayer';
import VideoQualityList from './VideoQualityList';

const VideoQuality = () => {
  const {currentUrl, playerVisible, setPlayerVisible} =
    useContext(PlayerContext);

  return (
    <Wrapper>
      <VideoQualityList />
      <Modal
        style={{margin: 0}}
        isVisible={playerVisible}
        useNativeDriver
        statusBarTranslucent
        onBackButtonPress={() => setPlayerVisible(false)}>
        <AnimeVideoPlayer url={currentUrl} />
      </Modal>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  padding: 10px;
  flex: 1;
`;

export default VideoQuality;
