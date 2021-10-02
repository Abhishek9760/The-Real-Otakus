import React, {useEffect, useContext} from 'react';
import {PlayerContext} from '../context/PlayerContext';
import Loader from '../components/utils/Loader';
import VideoQuality from '../components/VideoPlayer/VideoQuality';

function PlayerScreen({route}) {
  const {link} = route.params;
  const {vidUrls, getVidDownloadLinks, setVidUrls} = useContext(PlayerContext);

  useEffect(() => {
    if (link) {
      getVidDownloadLinks(link);
    }
    return () => setVidUrls([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [link]);

  return <>{vidUrls.length === 0 ? <Loader /> : <VideoQuality />}</>;
}

export default PlayerScreen;
