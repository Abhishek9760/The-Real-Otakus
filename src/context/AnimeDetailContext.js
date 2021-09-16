import React, {createContext, useContext, useState} from 'react';
import {ConnectionContext} from './ConnectionContext';

export const AnimeDetailContext = createContext();

export const AnimeDetailContextProvider = ({children}) => {
  const [animeEpisodes, setAnimeEpisodes] = useState([]);
  const [loading, setLoading] = useState(false);
  const {updateConnection} = useContext(ConnectionContext);

  const getAnimeInfo = async source => {
    const controller = new AbortController();
    // 10 second timeout:
    updateConnection();
    setTimeout(() => controller.abort(), 10000);
    const response = await fetch(
      `https://fathomless-coast-98646.herokuapp.com/episodes?source=${source}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        signal: controller.signal,
      },
    );

    const data = await response.json();
    return data;
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
