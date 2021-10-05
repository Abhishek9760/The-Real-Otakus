import React, {createContext, useState} from 'react';
import {showToast} from '../utils';

export const AnimeDetailContext = createContext();

const INITIAL_STATE = {
  total_episodes: 0,
  anime_info: {},
  episodes: [],
};

export const AnimeDetailContextProvider = ({children}) => {
  const [anime, setAnime] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);

  const getAnimeInfo = source => {
    let isCancelled = false;
    setLoading(true);
    return fetch(
      `https://therealotakus.azurewebsites.net/anime?source=${source}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
      .then(res => res.json())
      .then(data => {
        if (!isCancelled && data) {
          setAnime(data);
          setLoading(false);
        }
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
        showToast(err.message);
      });
  };

  const reset = () => setAnime(INITIAL_STATE);

  return (
    <AnimeDetailContext.Provider
      value={{
        anime,
        getAnimeInfo,
        loading,
        setLoading,
        setAnime,
        reset,
      }}>
      {children}
    </AnimeDetailContext.Provider>
  );
};
