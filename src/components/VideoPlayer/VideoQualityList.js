import React, {useContext} from 'react';
import {FlatList} from 'react-native';
import {List} from 'react-native-paper';
import {PlayerContext} from '../../context/PlayerContext';
import VideoQualityItem from './VideoQualityItem';

function VideoQualityList() {
  const {vidUrls} = useContext(PlayerContext);
  return (
    <List.Section>
      <FlatList
        keyExtractor={item => item[0]}
        data={Object.entries(vidUrls)}
        renderItem={({item}) => {
          const [quality, url] = item;
          return <VideoQualityItem text={quality} url={url} />;
        }}
      />
    </List.Section>
  );
}

export default VideoQualityList;
