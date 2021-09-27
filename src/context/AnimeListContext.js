import React, {createContext, useState} from 'react';
import {showToast} from '../utils';

export const AnimeListContext = createContext();

export const AnimeListContextProvider = ({children}) => {
  const [animeList, setAnimeList] = useState([]);
  const [animeListModal, setAnimeListModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getAnime = query => {
    setLoading(true);
    fetch(`https://glacial-fjord-95890.herokuapp.com/search/${query}/`)
      .then(res => res.json())
      .then(data => {
        setAnimeList(data);
        setLoading(false);
        if (data.length === 0) {
          showToast('Not Found');
        }
        setError('');
      })
      .catch(err => {
        setLoading(false);
        setError(err.message);
        showToast(err.message);
      });
  };

  const reset = () => setAnimeList([]);

  return (
    <AnimeListContext.Provider
      value={{
        animeList,
        getAnime,
        loading,
        error,
        animeListModal,
        setAnimeListModal,
        reset,
      }}>
      {children}
    </AnimeListContext.Provider>
  );
};
