import React from 'react';
import {Colors, FAB} from 'react-native-paper';
import styled from 'styled-components/native';
import VideoQualityList from './VideoQualityList';
import CloseButton from '../utils/CloseButton';

function VideoQuality() {
  return (
    <Wrapper>
      <HeaderText>Play In</HeaderText>
      <VideoQualityList />
      <CloseButton />
    </Wrapper>
  );
}

const Wrapper = styled.View`
  padding: 10px;
  flex: 1;
`;

const HeaderText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${Colors.purpleA700};
  background-color: #e5e5e5;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export default VideoQuality;
