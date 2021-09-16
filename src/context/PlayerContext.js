import React, {createContext, useContext, useState} from 'react';
import {ConnectionContext} from './ConnectionContext';

export const PlayerContext = createContext();

export const PlayerContextProvider = ({children}) => {
  const [vidUrls, setVidUrls] = useState({});
  const [epUrl, setEpUrl] = useState('');
  const {updateConnection} = useContext(ConnectionContext);

  const getVidDownloadLinks = epLink => {
    updateConnection();
    return fetch(
      `https://fathomless-coast-98646.herokuapp.com/episode?episode_link=${epLink}`,
    )
      .then(res => res.json())
      .then(data => data)
      .catch(err => {
        console.log(err);
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
      }}>
      {children}
    </PlayerContext.Provider>
  );
};
