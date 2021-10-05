import React, {createContext, useState, useEffect} from 'react';
import {showToast} from '../utils';

export const GenreContext = createContext();

export const GenreContextProvider = ({children}) => {
  const [genreList, setGenreList] = useState([]);
  const [genreAnimeList, setGenreAnimeList] = useState([]);
  const [genreListLoading, setGenreListLoading] = useState(false);
  const [genreAnimeListLoading, setGenreAnimeListLoading] = useState(false);
  const [error, setError] = useState('');

  const reset = () => setGenreAnimeList([]);

  const getGenreList = () => {
    setGenreListLoading(true);
    fetch('https://therealotakus.azurewebsites.net/genre')
      .then(res => res.json())
      .then(data => {
        setGenreList(data);
        setGenreListLoading(false);
      })
      .catch(err => {
        showToast(err.message);
        console.log(err);
        setGenreListLoading(false);
      });
  };

  const getGenreAnimeList = (genre, page = 1) => {
    setGenreAnimeListLoading(true);
    fetch(`https://therealotakus.azurewebsites.net/genre/${genre}?page=${page}`)
      .then(res => res.json())
      .then(data => {
        setError('');
        setGenreAnimeList([...genreAnimeList, ...data]);
        setGenreAnimeListLoading(false);
      })
      .catch(err => {
        setError(err.message);
        showToast(err.message);
        console.log(err);
        setGenreAnimeListLoading(false);
      });
  };

  useEffect(() => {
    getGenreList();
  }, []);

  return (
    <GenreContext.Provider
      value={{
        genreList,
        getGenreAnimeList,
        genreListLoading,
        genreAnimeListLoading,
        genreAnimeList,
        reset,
        error,
      }}>
      {children}
    </GenreContext.Provider>
  );
};
