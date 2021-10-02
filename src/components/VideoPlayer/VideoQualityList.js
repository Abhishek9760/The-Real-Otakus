import React, {useContext, useEffect} from 'react';
import {FlatList, Linking} from 'react-native';
import {Button, Colors, List} from 'react-native-paper';
import {PlayerContext} from '../../context/PlayerContext';
import VideoQualityItem from './VideoQualityItem';
import styled from 'styled-components/native';

function VideoQualityList() {
  const {vidUrls} = useContext(PlayerContext);
  console.log(vidUrls);

  const getStreamSb = () => {
    const links = vidUrls[1]['StreamSB'];
    if (links) {
      return Object.entries(links);
    }
    return [];
  };

  return (
    <List.Section>
      {/* <FlatList
        keyExtractor={item => item[0]}
        data={Object.entries(vidUrls[0])}
        renderItem={({item}) => {
          const [quality, url] = item;
          return <VideoQualityItem text={quality} url={url} />;
        }}
      /> */}
      <FlatList
        ListHeaderComponent={<Title>Stream Links</Title>}
        keyExtractor={item => item}
        data={getStreamSb()}
        renderItem={({item}) => {
          const [quality, url] = item;
          return <VideoQualityItem text={quality} url={url} />;
        }}
      />

      <FlatList
        keyExtractor={item => item.label}
        data={vidUrls[1]['Xstreamcdn']}
        renderItem={({item}) => {
          // console.log(item, 'xstream');
          return <VideoQualityItem text={item.label} url={item.file} />;
        }}
      />

      <FlatList
        keyExtractor={item => item}
        data={Object.keys(vidUrls[1]).filter(
          item => item !== 'StreamSB' && item !== 'Xstreamcdn',
        )}
        ListHeaderComponent={<Title>Download Links</Title>}
        renderItem={({item}) => {
          return (
            <Button
              onPress={() => Linking.openURL(vidUrls[1][item])}
              icon="link"
              contentStyle={{alignSelf: 'flex-start', marginLeft: '10%'}}
              mode="text">
              {item}
            </Button>
          );
        }}
      />
    </List.Section>
  );
}

export default VideoQualityList;

const Title = styled.Text`
  font-size: 20px;
  color: ${Colors.blueGrey900};
  font-family: 'Wabene';
  padding: 5px 0 15px 0;
`;
