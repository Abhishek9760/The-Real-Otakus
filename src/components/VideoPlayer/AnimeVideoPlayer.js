import React, {useEffect} from 'react';
import {Colors} from 'react-native-paper';
import VideoPlayer from 'react-native-video-controls';
import {useNavigation} from '@react-navigation/native';
import {
  hideNavigationBar,
  showNavigationBar,
} from 'react-native-navigation-bar-color';
import Orientation from 'react-native-orientation';
import {StatusBar} from 'react-native';

function AnimeVideoPlayer({url, navigator}) {
  const navigation = useNavigation();

  useEffect(() => {
    // console.log(navigation);
    hideNavigationBar();
    Orientation.unlockAllOrientations();

    return () => {
      showNavigationBar();
      Orientation.lockToPortrait();
    };
  }, []);

  return (
    <>
      <StatusBar hidden />
      <VideoPlayer
        source={{
          uri: url,
          headers: {Referer: 'https://streamani.net/'},
        }}
        seekColor={Colors.purpleA700}
        disableVolume
        onBack={() => navigation.navigate('Home')}
      />
    </>
  );
}

export default AnimeVideoPlayer;
