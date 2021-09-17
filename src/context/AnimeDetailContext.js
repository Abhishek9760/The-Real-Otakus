import React, {createContext, useState} from 'react';
import {showToast} from '../utils';

export const AnimeDetailContext = createContext();

export const AnimeDetailContextProvider = ({children}) => {
  const [animeEpisodes, setAnimeEpisodes] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAnimeInfo = async source => {
    const controller = new AbortController();
    // 10 second timeout:
    setTimeout(() => controller.abort(), 10000);
    return fetch(
      `https://fathomless-coast-98646.herokuapp.com/episodes?source=${source}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        signal: controller.signal,
      },
    )
      .then(res => res.json())
      .then(data => data)
      .catch(err => {
        console.log(err);
        showToast(err.message);
      });
  };

  return (
    <AnimeDetailContext.Provider
      value={{
        animeEpisodes,
        getAnimeInfo,
        loading,
        setLoading,
        setAnimeEpisodes,
      }}>
      {children}
    </AnimeDetailContext.Provider>
  );
};
