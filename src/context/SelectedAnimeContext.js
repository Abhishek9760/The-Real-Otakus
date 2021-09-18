import React, {createContext, useState} from 'react';

export const SelectedAnimeContext = createContext();

export const SelectedAnimeContextProvider = ({children}) => {
  const [anime, setAnime] = useState({});
  return (
    <SelectedAnimeContext.Provider value={{anime, setAnime}}>
      {children}
    </SelectedAnimeContext.Provider>
  );
};
