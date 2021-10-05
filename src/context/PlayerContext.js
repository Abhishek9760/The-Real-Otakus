import React, {createContext, useState} from 'react';
import {showToast} from '../utils';
import {get_links} from '../components/utils/xstream';

export const PlayerContext = createContext();

export const PlayerContextProvider = ({children}) => {
  const [vidUrls, setVidUrls] = useState([]);
  const [epUrl, setEpUrl] = useState('');
  const [paused, setPaused] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');
  const [playerVisible, setPlayerVisible] = useState(false);

  const getVidDownloadLinks = epLink => {
    return fetch(
      `https://therealotakus.azurewebsites.net/episode?episode_link=${epLink}`,
    )
      .then(res => res.json())
      .then(data => {
        const xstream = data[1].Xstreamcdn;
        if (xstream && Object.keys(data[0]).length === 0) {
          get_links(xstream).then(xstremRes => {
            if (typeof xstremRes.data === 'object') {
              data[1].Xstreamcdn = xstremRes.data;
            } else {
              delete data[1].Xstreamcdn;
            }
            setVidUrls(data);
          });
        } else {
          delete data[1].Xstreamcdn;
          setVidUrls(data);
        }
      })
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
        setCurrentUrl,
        playerVisible,
        setPlayerVisible,
        currentUrl,
      }}>
      {children}
    </PlayerContext.Provider>
  );
};
