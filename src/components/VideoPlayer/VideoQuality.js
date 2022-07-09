import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {useSelector} from 'react-redux';
import styled from 'styled-components/native';
import AnimeVideoPlayer from './AnimeVideoPlayer';
import VideoQualityList from './VideoQualityList';

const VideoQuality = () => {
  const [playerVisible, setPlayerVisible] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');
  const playerData = useSelector(state => state.playerData);

  return (
    <Wrapper>
      <VideoQualityList
        setPlayerVisible={setPlayerVisible}
        setCurrentUrl={setCurrentUrl}
        vidUrls={playerData.vidUrls}
      />
      <Modal
        animationIn="zoomIn"
        animationOut="zoomOut"
        style={{margin: 0}}
        isVisible={playerVisible}
        useNativeDriver
        statusBarTranslucent
        onBackButtonPress={() => setPlayerVisible(false)}>
        <AnimeVideoPlayer
          url={currentUrl}
          setPlayerVisible={setPlayerVisible}
        />
      </Modal>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  padding: 10px;
  flex: 1;
`;

export default VideoQuality;
