import React, {createContext, useState, useEffect} from 'react';
import {showToast} from '../utils';

export const PopularAnimeContext = createContext();

export const PopularAnimeContextProvider = ({children}) => {
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = () => {
    setLoading(true);
    fetch('https://therealotakus.azurewebsites.net/popular')
      .then(res => res.json())
      .then(data => {
        setLoading(false);
        setPopular(data);
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
