import React, {useContext, useEffect} from 'react';
import {FlatList} from 'react-native';
import {List} from 'react-native-paper';
import {PlayerContext} from '../../context/PlayerContext';
import VideoQualityItem from './VideoQualityItem';

import {InterstitialAd, AdEventType} from '@react-native-firebase/admob';

const adUnitId = 'ca-app-pub-2113156158089069/1946114947';

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['anime', 'games', 'fashion'],
});

function VideoQualityList() {
  const {vidUrls} = useContext(PlayerContext);

  const showAd = () => {
    if (interstitial.loaded) {
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
  }, []);
  return (
    <List.Section>
      <FlatList
        keyExtractor={item => item[0]}
        data={Object.entries(vidUrls)}
        renderItem={({item}) => {
          const [quality, url] = item;
          return <VideoQualityItem showAd={showAd} text={quality} url={url} />;
        }}
      />
    </List.Section>
  );
}

export default VideoQualityList;
