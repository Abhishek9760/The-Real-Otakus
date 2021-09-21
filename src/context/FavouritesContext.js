import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavouritesContext = createContext();

const STORAGE_KEY = '@therealotakus--secret';

export const FavouritesContextProvider = ({children}) => {
  const [favourites, setFavourites] = useState({});

  const checkFavourite = item => favourites.hasOwnProperty(item.name);

  const saveFavourites = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const loadFavourites = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
      return jsonValue != null ? setFavourites(JSON.parse(jsonValue)) : null;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadFavourites();
  }, []);

  useEffect(() => {
    saveFavourites(favourites);
  }, [favourites]);

  const addToFavourites = item => {
    console.log('adding...');
    let data = {...favourites};
    data[item.name] = item;
    setFavourites(data);
  };

  const removeFromFavourites = item => {
    let data = {...favourites};
    delete data[item.name];
    setFavourites(data);
  };

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        checkFavourite,
      }}>
      {children}
    </FavouritesContext.Provider>
  );
};
