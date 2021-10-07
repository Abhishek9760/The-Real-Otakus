import React, {createContext, useState} from 'react';
import {showToast} from '../utils';

export const PopularAnimeContext = createContext();

export const PopularAnimeContextProvider = ({children}) => {
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const getPopular = (page = 1) => {
    setLoading(true);
    fetch(`https://therealotakus.azurewebsites.net/popular?page=${page}`)
      .then(res => res.json())
      .then(data => {
        setLoading(false);
        setPopular([...popular, ...data]);
        setError('');
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
        setError(err.message);
        showToast(err.message);
      });
  };
  return (
    <PopularAnimeContext.Provider
      value={{popular, setPopular, getPopular, loading, error}}>
      {children}
    </PopularAnimeContext.Provider>
  );
};
