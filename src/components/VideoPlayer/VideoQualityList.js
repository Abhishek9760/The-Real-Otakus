import React, {useContext} from 'react';
import {Linking, ScrollView, StyleSheet} from 'react-native';
import {Button, Colors} from 'react-native-paper';
import {PlayerContext} from '../../context/PlayerContext';
import VideoQualityItem from './VideoQualityItem';
import styled from 'styled-components/native';

const XSTREAM = 'Xstreamcdn';
const STREAMSB = 'StreamSB';

function VideoQualityList() {
  const {vidUrls, setPlayerVisible, setCurrentUrl} = useContext(PlayerContext);

  const getStreamSb = () => {
    const links = vidUrls[1][STREAMSB];
    if (links) {
      return Object.entries(links);
    }
    return false;
  };

  const handlePress = url => {
    setCurrentUrl(url);
    setPlayerVisible(true);
  };

  return (
    <ScrollView>
      <Title>Stream Links</Title>
      {Object.entries(vidUrls[0]).map(item => {
        const [quality, url] = item;
        return (
          <VideoQualityItem
            icon="speedometer"
            color={Colors.green700}
            key={quality}
            text={quality}
            onPress={() => handlePress(url)}
          />
        );
      })}
      {typeof vidUrls[1][STREAMSB] !== 'string' &&
        getStreamSb().map(item => {
          const [quality, url] = item;
          return (
            <VideoQualityItem
              icon="video"
              key={quality}
              color={Colors.green800}
              text={quality}
              onPress={() => handlePress(url)}
            />
          );
        })}
      {vidUrls[1][XSTREAM] &&
        typeof vidUrls[1][XSTREAM] !== 'string' &&
        Object.entries(vidUrls[1][XSTREAM]).map(item => {
          const item_ = item[1];
          return (
            <VideoQualityItem
              icon="file-video"
              color={Colors.green900}
              key={item_.label}
              text={item_.label}
              onPress={() => handlePress(item_.file)}
            />
          );
        })}
      <Title>Download Links</Title>
      {vidUrls[1] &&
        Object.keys(vidUrls[1])
          .filter(item => item !== 'StreamSB' && item !== 'Xstreamcdn')
          .map(item => {
            return (
              <Button
                key={item}
                onPress={() => Linking.openURL(vidUrls[1][item])}
                icon="link"
                color={Colors.green900}
                contentStyle={styles.contentStyle}
                mode="text">
                {item}
              </Button>
            );
          })}
    </ScrollView>
  );
}

export default VideoQualityList;

const styles = StyleSheet.create({
  contentStyle: {
    alignSelf: 'flex-start',
    marginLeft: '10%',
  },
});

const Title = styled.Text`
  font-size: 20px;
  color: ${Colors.blueGrey700};
  font-family: 'Wabene';
  padding: 5px 0 15px 0;
`;
