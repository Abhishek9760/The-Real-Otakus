import React, {createContext, useState} from 'react';
import {showToast} from '../utils';

export const AnimeDetailContext = createContext();

export const AnimeDetailContextProvider = ({children}) => {
  const [animeEpisodes, setAnimeEpisodes] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAnimeInfo = source => {
    let isCancelled = false;
    setLoading(true);
    return fetch(
      `https://glacial-fjord-95890.herokuapp.com/episodes?source=${source}`,
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
          setAnimeEpisodes(data);
          setLoading(false);
        }
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
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
