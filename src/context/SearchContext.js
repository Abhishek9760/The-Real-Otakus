import React, {createContext, useState, useContext} from 'react';
import {Keyboard} from 'react-native';
import {AnimeListContext} from './AnimeListContext';

export const SearchContext = createContext();

export const SearchContextProvider = ({children}) => {
  const [query, setQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const {getAnime} = useContext(AnimeListContext);

  const submit = () => {
    if (query.trim().length !== 0) {
      Keyboard.dismiss();
      setShowSearch(false);
      getAnime(query);
    }
  };
  return (
    <SearchContext.Provider
      value={{query, setQuery, submit, showSearch, setShowSearch}}>
      {children}
    </SearchContext.Provider>
  );
};
