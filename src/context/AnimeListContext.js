import React, {createContext, useState, useEffect} from 'react';
import {showToast} from '../utils';

export const AnimeListContext = createContext();

export const AnimeListContextProvider = ({children}) => {
  const [animeList, setAnimeList] = useState([]);
  const [animeListModal, setAnimeListModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [popular, setPopular] = useState([]);

  useEffect(() => {
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
        showToast(err.message);
      });
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
          setError('Not Found');
        }
      })
      .catch(err => {
        setLoading(false);
        setError(err.message);
      });
  };

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
      }}>
      {children}
    </AnimeListContext.Provider>
  );
};
