import React, {useContext, useEffect} from 'react';
import {Linking, ScrollView, StyleSheet} from 'react-native';
import {Button, Colors} from 'react-native-paper';
import {PlayerContext} from '../../context/PlayerContext';
import VideoQualityItem from './VideoQualityItem';
import styled from 'styled-components/native';
import {
  InterstitialAd,
  AdEventType,
  TestIds,
} from '@react-native-firebase/admob';

const adUnitId = __DEV__
  ? TestIds.INTERSTITIAL
  : 'ca-app-pub-2910763857656833/2006741969';

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['anime', 'games', 'fashion'],
});

const XSTREAM = 'Xstreamcdn';
const STREAMSB = 'StreamSB';

function VideoQualityList() {
  const {vidUrls, setPlayerVisible, setCurrentUrl, setPaused} =
    useContext(PlayerContext);

  const showAd = () => {
    if (interstitial.loaded) {
      setPaused(true);
      interstitial.show().catch(err => console.log(err));
    }
  };

  useEffect(() => {
    const eventListener = interstitial.onAdEvent(type => {
      if (type === AdEventType.LOADED) {
        console.log('InterstitialAd adLoaded');
      } else if (type === AdEventType.ERROR) {
        console.warn('InterstitialAd => Error');
      } else if (type === AdEventType.OPENED) {
        console.log('IntertitialAd => adOpened');
      } else if (type === AdEventType.CLICKED) {
        console.log('InterstitialAd => adClicked');
      } else if (type === AdEventType.LEFT_APPLICATION) {
        console.log('InterstitialAd => adLeft_App');
      } else if (type === AdEventType.CLOSED) {
        console.log('InterstitialAd => adClosed');
        setPaused(false);
        interstitial.load();
      }
    });

    console.log('loading ads from useeffect');

    // Start loading the interstitial straight away
    if (!interstitial.loaded) {
      interstitial.load();
    }
    // Unsubscribe from events on unmount
    return () => {
      eventListener();
      // setLoaded(false)
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getStreamSb = () => {
    const links = vidUrls[1][STREAMSB];
    if (links) {
      return Object.entries(links);
    }
    return false;
  };

  const handlePress = url => {
    showAd();
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
