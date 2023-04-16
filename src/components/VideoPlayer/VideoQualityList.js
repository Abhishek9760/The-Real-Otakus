import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Colors} from 'react-native-paper';
import VideoQualityItem from './VideoQualityItem';
import styled from 'styled-components/native';

function VideoQualityList({setPlayerVisible, setCurrentUrl, vidUrls}) {
  const handlePress = url => {
    setCurrentUrl(url);
    setPlayerVisible(true);
  };

  return (
    <ScrollView>
      {vidUrls.map((item, index) => {
        const quality = item.quality;
        const url = item.stream_url;
        return (
          <VideoQualityItem
            icon="speedometer"
            color={Colors.green700}
            key={index}
            text={quality || 'Play'}
            onPress={() => handlePress(url)}
          />
        );
      })}
    </ScrollView>
  );
}

export default VideoQualityList;
