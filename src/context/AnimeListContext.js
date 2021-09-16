import React, {createContext, useState, useEffect, useContext} from 'react';
import {showToast} from '../utils';
import {ConnectionContext} from './ConnectionContext';

export const AnimeListContext = createContext();

export const AnimeListContextProvider = ({children}) => {
  const {updateConnection} = useContext(ConnectionContext);
  const [animeList, setAnimeList] = useState([]);
  const [animeListModal, setAnimeListModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    updateConnection();
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
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAnime = query => {
    updateConnection();
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
