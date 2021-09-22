import React from 'react';
import styled from 'styled-components/native';
import VideoQualityList from './VideoQualityList';

function VideoQuality() {
  return (
    <Wrapper>
      <VideoQualityList />
    </Wrapper>
  );
}

const Wrapper = styled.View`
  padding: 10px;
  flex: 1;
`;

export default VideoQuality;
