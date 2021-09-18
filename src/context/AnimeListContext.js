import React, {createContext, useState, useEffect} from 'react';
import {showToast} from '../utils';

export const AnimeListContext = createContext();

export const AnimeListContextProvider = ({children}) => {
  const [animeList, setAnimeList] = useState([]);
  const [animeListModal, setAnimeListModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [popular, setPopular] = useState([]);

  const getPopular = () => {
    setLoading(true);
    fetch('https://fathomless-coast-98646.herokuapp.com/popular/')
      .then(res => res.json())
      .then(data => {
        setLoading(false);
        setPopular(data);
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
        setError(err.message);
        showToast(err.message);
      });
  };

  useEffect(() => {
    getPopular();
  }, []);

  const getAnime = query => {
    setLoading(true);
    fetch(`https://fathomless-coast-98646.herokuapp.com/search/${query}/`)
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
        popular,
        getPopular,
        reset,
      }}>
      {children}
    </AnimeListContext.Provider>
  );
};
