import React, {createContext, useState} from 'react';

export const SearchContext = createContext();

export const SearchContextProvider = ({children}) => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <SearchContext.Provider value={{showSearch, setShowSearch}}>
      {children}
    </SearchContext.Provider>
  );
};
