import React, {createContext, useState} from 'react';

export const SelectedAnimeContext = createContext();

export const SelectedAnimeContextProvider = ({children}) => {
  const [selectedAnime, setSelectedAnime] = useState({});
  return (
    <SelectedAnimeContext.Provider value={{selectedAnime, setSelectedAnime}}>
      {children}
    </SelectedAnimeContext.Provider>
  );
};
