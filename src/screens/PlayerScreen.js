import React, {useEffect, useContext} from 'react';
import {PlayerContext} from '../context/PlayerContext';
import Loader from '../components/utils/Loader';
import VideoQuality from '../components/VideoPlayer/VideoQuality';

function PlayerScreen({route}) {
  const {link} = route.params;
  const {vidUrls, getVidDownloadLinks, setVidUrls} = useContext(PlayerContext);

  useEffect(() => {
    if (link) {
      getVidDownloadLinks(link).then(data => {
        setVidUrls(data);
      });
    }
    return () => setVidUrls({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [link]);

  return (
    <>
      {Object.keys(vidUrls).length === 0 && vidUrls.constructor === Object ? (
        <Loader />
      ) : (
        <VideoQuality />
      )}
    </>
  );
}

export default PlayerScreen;
