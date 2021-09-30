import React, {createContext, useState} from 'react';
import {showToast} from '../utils';

export const PlayerContext = createContext();

export const PlayerContextProvider = ({children}) => {
  const [vidUrls, setVidUrls] = useState({});
  const [epUrl, setEpUrl] = useState('');
  const [paused, setPaused] = useState(false);

  const getVidDownloadLinks = epLink => {
    return fetch(
      `https://therealotakus.azurewebsites.net/episode?episode_link=${epLink}`,
    )
      .then(res => res.json())
      .then(data => setVidUrls(data))
      .catch(err => {
        console.log(err);
        showToast(err.message);
        return {};
      });
  };
  return (
    <PlayerContext.Provider
      value={{
        vidUrls,
        getVidDownloadLinks,
        epUrl,
        setEpUrl,
        setVidUrls,
        paused,
        setPaused,
      }}>
      {children}
    </PlayerContext.Provider>
  );
};
